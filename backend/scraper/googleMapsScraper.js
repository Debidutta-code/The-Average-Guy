const puppeteer = require('puppeteer');

/**
 * Normalizes phone numbers to a standard +91 format (example for Indian context)
 */
const normalizePhone = (phone) => {
  if (!phone) return null;
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) return `+91${cleaned}`;
  if (cleaned.length === 12 && cleaned.startsWith('91')) return `+${cleaned}`;
  return phone;
};

const scrapeGoogleMaps = async (businessType, city, limit = 50, onProgress = () => {}) => {
  const query = `${businessType} in ${city}`;
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto(url, { waitUntil: 'networkidle2' });

    let results = [];
    let lastHeight = 0;

    // Auto-scroll logic to load more results
    while (results.length < limit) {
        const newResults = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.Nv2Y33, .UaP99, .hfpxRy')); // Common selectors for result items
            return items.map(item => {
                const link = item.querySelector('a')?.href || "";
                const name = item.querySelector('.qBF1Pd')?.innerText || "";
                const rating = parseFloat(item.querySelector('.MW4T7d')?.innerText) || 0;
                const reviewCountText = item.querySelector('.UY7F9')?.innerText || "0";
                const reviewCount = parseInt(reviewCountText.replace(/\D/g, '')) || 0;

                // Address and other info are often in secondary spans
                const infoSpans = Array.from(item.querySelectorAll('.W4E9H, .AJ71ec'));
                const fullAddress = infoSpans[0]?.innerText || "";

                return { name, googleMapLink: link, rating, reviewCount, fullAddress };
            }).filter(i => i.name);
        });

        results = newResults;
        onProgress({ found: results.length });

        if (results.length >= limit) break;

        // Scroll the results container
        await page.evaluate(() => {
            const container = document.querySelector('.m67q60-a61d61-view-content') || document.querySelector('[role="feed"]');
            if (container) container.scrollBy(0, 1000);
        });

        await new Promise(r => setTimeout(r, 2000)); // Wait for load

        const currentHeight = await page.evaluate(() => document.querySelector('[role="feed"]')?.scrollHeight || 0);
        if (currentHeight === lastHeight) break; // End of list
        lastHeight = currentHeight;
    }

    results = results.slice(0, limit);
    const finalLeads = [];

    // Enriching data (Phone/Website) usually requires clicking each item
    // In a high-speed scraper, we try to extract what's visible or do a secondary pass
    for (let lead of results) {
        // Simple normalization
        lead.city = city;
        lead.businessType = businessType;
        lead.source = 'Google Maps';
        lead.createdFrom = 'google_maps_scraper';

        finalLeads.push(lead);
    }

    return finalLeads;

  } catch (err) {
    console.error('Scraper error:', err);
    throw err;
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeGoogleMaps, normalizePhone };
