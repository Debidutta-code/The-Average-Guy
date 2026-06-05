const puppeteer = require('puppeteer');

/**
 * Normalizes phone numbers to a standard +91 format
 */
const normalizePhone = (phone) => {
  if (!phone) return null;
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) return `+91${cleaned}`;
  if (cleaned.length === 12 && cleaned.startsWith('91')) return `+${cleaned}`;
  return phone;
};

const scrapeGoogleMaps = async (businessType, city, limit = 50, onProgress = () => {}) => {
  console.log('Scraper started');
  const query = `${businessType} in ${city}`;
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1000 });

    console.log(`Navigating to Google Maps: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    console.log('Search executed');

    // Wait for the side panel results container
    try {
        await page.waitForSelector('.m6QErb.DxyBCb', { timeout: 15000 });
        console.log('Results container found');
    } catch (e) {
        console.log('Results container not found via primary selector, checking fallback...');
        await page.waitForSelector('[role="feed"]', { timeout: 5000 }).catch(() => {});
    }

    let results = [];
    let lastHeight = 0;
    let scrollCycles = 0;
    const maxCycles = 20;

    console.log('Starting auto-scroll...');
    while (results.length < limit && scrollCycles < maxCycles) {
        // Extract visible items
        const newResults = await page.evaluate(() => {
            // Updated selectors based on current Google Maps DOM
            const items = Array.from(document.querySelectorAll('.Nv2PK, .THOPZb, .lI9IFe'));
            return items.map(item => {
                const link = item.querySelector('a.hfpxRy')?.href || "";
                const name = item.querySelector('.qBF1Pd')?.innerText || "";

                // Rating and Review Count
                const ratingEl = item.querySelector('.MW4T7d');
                const rating = ratingEl ? parseFloat(ratingEl.innerText) : 0;

                const reviewText = item.querySelector('.UY7F9')?.innerText || "";
                const reviewCount = parseInt(reviewText.replace(/\D/g, '')) || 0;

                // Address and other info
                const infoContainer = item.querySelector('.UaQhfb');
                const infoLines = infoContainer ? Array.from(infoContainer.querySelectorAll('.W4E9H')) : [];
                const fullAddress = infoLines.length > 0 ? infoLines[0].innerText : "";

                // Find phone pattern in any text within the item
                const allText = item.innerText;
                const phoneMatch = allText.match(/(\+?\d{1,4}[\s-])?(\d{10}|\d{5}[\s-]\d{5})/);
                const phone = phoneMatch ? phoneMatch[0] : null;

                return { name, googleMapLink: link, rating, reviewCount, fullAddress, phone };
            }).filter(i => i.name && i.name.length > 2);
        });

        // Deduplicate within the current run
        const uniqueInBatch = [];
        const seenNames = new Set();
        newResults.forEach(item => {
            if (!seenNames.has(item.name)) {
                uniqueInBatch.push(item);
                seenNames.add(item.name);
            }
        });
        results = uniqueInBatch;

        console.log(`Extracting data: found ${results.length} results so far`);
        onProgress({ found: results.length });

        if (results.length >= limit) break;

        // Scroll the results container
        await page.evaluate(() => {
            const container = document.querySelector('.m6QErb.DxyBCb.dS8AEf') || document.querySelector('[role="feed"]');
            if (container) {
                container.scrollBy(0, 1000);
            } else {
                window.scrollBy(0, 1000);
            }
        });

        await new Promise(r => setTimeout(r, 2500));

        const currentHeight = await page.evaluate(() => {
            const container = document.querySelector('.m6QErb.DxyBCb.dS8AEf') || document.querySelector('[role="feed"]');
            return container ? container.scrollHeight : document.body.scrollHeight;
        });

        if (currentHeight === lastHeight) {
            console.log('End of list reached or scrolling stuck');
            break;
        }
        lastHeight = currentHeight;
        scrollCycles++;
    }

    console.log(`Found ${results.length} total results`);

    return results.slice(0, limit).map(lead => ({
        ...lead,
        city,
        businessType,
        source: 'Google Maps',
        createdFrom: 'google_maps_scraper',
        phoneNumber: normalizePhone(lead.phone)
    }));

  } catch (err) {
    console.log(`Failing at step: ${err.message}`);
    throw err;
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeGoogleMaps, normalizePhone };
