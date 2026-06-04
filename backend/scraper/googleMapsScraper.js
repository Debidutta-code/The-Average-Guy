const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Lead = require('../models/Lead');
const { calculateScore } = require('../services/scoringService');
require('dotenv').config();

const scrapeGoogleMaps = async (city, specialty) => {
  const query = `${specialty} in ${city}`;
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url);

  // Wait for results to load
  await page.waitForSelector('.m67q60-a61d61-view-content');

  const leads = await page.evaluate(() => {
    const results = [];
    const items = document.querySelectorAll('.m67q60-a61d61-view-content .UaP99'); // Simplified selector for example

    // Note: Google Maps selectors change frequently.
    // In a real-world scenario, this would need robust selectors.

    items.forEach(item => {
      const name = item.querySelector('.qBF1Pd')?.innerText;
      const rating = parseFloat(item.querySelector('.MW4T7d')?.innerText) || 0;
      const phone = ""; // Would need to click to get details usually
      const website = item.querySelector('a[aria-label*="website"]')?.href || "";

      if (name) {
        results.push({
          doctorName: name,
          clinicName: name,
          rating,
          website,
          city: "Detected City", // Placeholder
          specialty: "Detected Specialty", // Placeholder
          source: 'Google Maps'
        });
      }
    });
    return results;
  });

  await browser.close();

  // Save to DB
  for (let leadData of leads) {
    leadData.city = city;
    leadData.specialty = specialty;
    const { score, badge } = calculateScore(leadData);
    const lead = new Lead({ ...leadData, score, scoreBadge: badge });
    await lead.save();
  }

  return leads;
};

module.exports = { scrapeGoogleMaps };
