const puppeteer = require('puppeteer');

const normalizePhone = (phone) => {
  if (!phone) return null;
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) return `+91${cleaned}`;
  if (cleaned.length === 12 && cleaned.startsWith('91')) return `+${cleaned}`;
  return phone;
};

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

/**
 * Navigate with retry logic
 */
const navigateWithRetry = async (page, url, options = {}, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded', // faster than networkidle2
        timeout: 45000,               // 45s instead of 30s
        ...options
      });
      return true;
    } catch (err) {
      console.log(`Navigation attempt ${attempt}/${retries} failed: ${err.message}`);
      if (attempt === retries) throw err;
      await sleep(2000 * attempt); // exponential backoff
    }
  }
};

/**
 * Setup a page with stealth headers to reduce bot detection
 */
const setupPage = async (browser) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  });
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );
  // Remove webdriver flag
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });
  return page;
};

/**
 * Scrape a single place detail page for phone + website
 */
const scrapeDetailPage = async (page, placeUrl) => {
  try {
    await navigateWithRetry(page, placeUrl);

    // Wait for the info panel to load
    await Promise.race([
      page.waitForSelector('a[href^="tel:"]', { timeout: 8000 }).catch(() => null),
      page.waitForSelector('button[aria-label*="phone" i]', { timeout: 8000 }).catch(() => null),
      sleep(5000) // max wait even if neither appears
    ]);

    return await page.evaluate(() => {
      let phone = null;
      let website = null;

      // ── Phone: tel: link is most reliable ──
      const telLink = document.querySelector('a[href^="tel:"]');
      if (telLink) {
        phone = telLink.href.replace('tel:', '').trim();
      }

      // Fallback: aria-label on buttons/links containing digits
      if (!phone) {
        const els = Array.from(document.querySelectorAll('[aria-label]'));
        for (const el of els) {
          const label = el.getAttribute('aria-label') || '';
          const match = label.match(/(\+91[\s-]?\d{5}[\s-]?\d{5}|\b[6-9]\d{9}\b)/);
          if (match) { phone = match[0].replace(/\s|-/g, ''); break; }
        }
      }

      // Fallback: data-item-id containing phone
      if (!phone) {
        const phoneEl = document.querySelector('[data-item-id*="phone"]');
        if (phoneEl) {
          const match = (phoneEl.textContent || '').match(/[\d\s\-\+]{10,}/);
          if (match) phone = match[0].trim();
        }
      }

      // ── Website ──
      // Most reliable: data-item-id="authority" is Google's website button
      const websiteEl =
        document.querySelector('a[data-item-id="authority"]') ||
        document.querySelector('a[aria-label*="website" i]') ||
        document.querySelector('a[aria-label*="Visit" i]');

      if (websiteEl?.href) {
        website = websiteEl.href;
      }

      // Fallback: any external non-Google link in the info section
      if (!website) {
        const candidates = Array.from(document.querySelectorAll('a[href^="http"]'));
        for (const a of candidates) {
          const href = a.href || '';
          if (
            href &&
            !href.includes('google.com') &&
            !href.includes('goo.gl') &&
            !href.includes('maps.app') &&
            !href.startsWith('tel:') &&
            !href.startsWith('mailto:') &&
            !href.includes('facebook.com/sharer') &&
            !href.includes('twitter.com/intent')
          ) {
            website = href;
            break;
          }
        }
      }

      return { phone, website };
    });

  } catch (err) {
    console.log(`  Detail page failed (${placeUrl.slice(0, 60)}...): ${err.message}`);
    return { phone: null, website: null };
  }
};

/**
 * Main scraper
 * @param {string}   businessType
 * @param {string}   city
 * @param {number}   limit          - How many NEW leads (by phone) to collect
 * @param {Set}      existingPhones - Normalized phone numbers already in DB
 * @param {Function} onProgress
 */
const scrapeGoogleMaps = async (
  businessType,
  city,
  limit = 50,
  existingPhones = new Set(),
  onProgress = () => {}
) => {
  console.log(`\n=== Scraper Start: ${businessType} in ${city} | Target: ${limit} new ===`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',        // prevent crashes in low-memory envs
      '--disable-gpu',
      '--lang=en-US,en',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1280,900',
    ]
  });

  const listPage = await setupPage(browser);
  const detailPage = await setupPage(browser);

  try {
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(`${businessType} in ${city}`)}`;
    console.log(`Navigating to: ${searchUrl}`);

    await navigateWithRetry(listPage, searchUrl);

    // Extra wait for dynamic content
    await sleep(3000);

    // ── Find the results feed ──
    const FEED_SELECTORS = [
      '[role="feed"]',
      '.m6QErb[role="feed"]',
      '.m6QErb',
      'div[aria-label*="Results for"]',
    ];
    let feedSelector = null;
    for (const sel of FEED_SELECTORS) {
      try {
        await listPage.waitForSelector(sel, { timeout: 10000 });
        feedSelector = sel;
        console.log(`Feed found with: "${sel}"`);
        break;
      } catch (_) {}
    }
    if (!feedSelector) {
      // Take a screenshot to debug what Google is showing
      await listPage.screenshot({ path: '/tmp/maps_debug.png' });
      throw new Error('Could not find results container. Check /tmp/maps_debug.png');
    }

    await sleep(1500);

    const seenNames = new Set();
    const newLeads = [];
    let noNewStreak = 0;
    const MAX_STREAK = 8;
    let scrollCycles = 0;
    const MAX_CYCLES = 80;

    console.log(`Known phones in DB: ${existingPhones.size}`);

    while (newLeads.length < limit && scrollCycles < MAX_CYCLES) {
      // ── Get all visible cards from the list ──
      const cards = await listPage.evaluate(() => {
        return Array.from(document.querySelectorAll('[role="feed"] > div')).map(card => {
          const nameEl =
            card.querySelector('div.fontHeadlineSmall') ||
            card.querySelector('.qBF1Pd') ||
            card.querySelector('h3') ||
            card.querySelector('a[aria-label]');
          const name = nameEl?.innerText?.trim() || nameEl?.getAttribute('aria-label')?.trim() || '';
          if (!name || name.length < 2) return null;

          const linkEl = card.querySelector('a[href*="/maps/place"]');
          const googleMapLink = linkEl?.href || '';
          if (!googleMapLink) return null; // skip cards without a link

          // Rating
          let rating = 0;
          const ratingEl = card.querySelector('span[aria-label*="star"]') ||
                           card.querySelector('span[role="img"][aria-label*="star"]');
          if (ratingEl) {
            const m = ratingEl.getAttribute('aria-label')?.match(/[\d.]+/);
            rating = m ? parseFloat(m[0]) : 0;
          }
          if (!rating) {
            for (const s of card.querySelectorAll('span')) {
              if (/^\d\.\d$/.test(s.innerText?.trim())) {
                rating = parseFloat(s.innerText.trim()); break;
              }
            }
          }

          // Review count
          let reviewCount = 0;
          for (const s of card.querySelectorAll('span')) {
            if (/^\([\d,]+\)$/.test(s.innerText?.trim())) {
              reviewCount = parseInt(s.innerText.replace(/\D/g, '')); break;
            }
          }

          // Address
          let fullAddress = '';
          for (const s of card.querySelectorAll('span, div')) {
            const t = s.innerText?.trim();
            if (t && t.length > 10 && /\d/.test(t) && !t.startsWith('+') && !/^\d+(\.\d+)?$/.test(t) && t.length < 200) {
              fullAddress = t; break;
            }
          }

          return { name, googleMapLink, rating, reviewCount, fullAddress };
        }).filter(Boolean);
      });

      // ── Visit detail page for each new card ──
      let newThisCycle = 0;
      for (const card of cards) {
        if (seenNames.has(card.name)) continue;
        seenNames.add(card.name);

        console.log(`  [${seenNames.size}] Fetching details: ${card.name}`);

        const { phone, website } = await scrapeDetailPage(detailPage, card.googleMapLink);
        const normalizedPhone = normalizePhone(phone);

        const fullLead = { ...card, phone, website, phoneNumber: normalizedPhone };

        if (normalizedPhone && existingPhones.has(normalizedPhone)) {
          // Phone already in DB — skip (controller will enrich if needed)
          console.log(`  ✗ Known phone: ${normalizedPhone}`);
        } else {
          // New phone (or no phone found) — include
          if (normalizedPhone) {
            existingPhones.add(normalizedPhone); // dedup within this run
            console.log(`  ✓ New: ${card.name} | ${normalizedPhone} | ${website || 'no website'}`);
          } else {
            console.log(`  ~ No phone found: ${card.name}`);
          }
          newLeads.push(fullLead);
          newThisCycle++;
        }

        onProgress({ found: newLeads.length, scraped: seenNames.size });
        if (newLeads.length >= limit) break;

        await sleep(800); // polite delay between requests
      }

      console.log(
        `\nCycle ${scrollCycles + 1}: +${newThisCycle} new this scroll | ` +
        `Total new: ${newLeads.length}/${limit} | Cards seen: ${seenNames.size}`
      );

      if (newLeads.length >= limit) break;

      // Streak detection
      if (newThisCycle === 0) {
        noNewStreak++;
        if (noNewStreak >= MAX_STREAK) {
          console.log('\nGoogle Maps has no more results to offer.');
          break;
        }
      } else {
        noNewStreak = 0;
      }

      // ── Scroll the list panel ──
      const scrolled = await listPage.evaluate(() => {
        const selectors = [
          '[role="feed"]',
          '.m6QErb.DxyBCb.dS8AEf.k7jAl',
          '.m6QErb.DxyBCb.dS8AEf',
          '.m6QErb.DxyBCb',
          '.m6QErb',
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el && el.scrollHeight > el.clientHeight) {
            el.scrollTop += 2500;
            return sel;
          }
        }
        window.scrollBy(0, 2500);
        return 'window';
      });
      console.log(`Scrolled via: ${scrolled}`);

      await sleep(3000); // wait for new cards to load after scroll
      scrollCycles++;
    }

    console.log(`\n=== Done: ${newLeads.length} new leads, ${seenNames.size} total cards visited ===\n`);

    return newLeads.slice(0, limit).map(lead => ({
      ...lead,
      city,
      businessType,
      source: 'Google Maps',
      createdFrom: 'google_maps_scraper',
    }));

  } catch (err) {
    console.error(`Scraper failed: ${err.message}`);
    // Screenshot for debugging
    try { await listPage.screenshot({ path: '/tmp/maps_error.png' }); } catch (_) {}
    throw err;
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeGoogleMaps, normalizePhone };
