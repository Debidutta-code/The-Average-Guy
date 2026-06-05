const Lead = require('../models/Lead');
const { scrapeGoogleMaps, normalizePhone } = require('../scraper/googleMapsScraper');
const { calculateScore } = require('../services/scoringService');

let scrapingStatus = {
  active: false,
  found: 0,
  inserted: 0,
  merged: 0,
  error: null,
  results: []
};

const runScraper = async (req, res) => {
  const { businessType, city, limit = 50 } = req.body;

  if (scrapingStatus.active) {
    return res.status(400).json({ message: 'Scraper is already running' });
  }

  scrapingStatus = { active: true, found: 0, inserted: 0, merged: 0, error: null, results: [] };
  res.json({ message: 'Scraper started' });

  try {
    // ── Fetch all existing mobile numbers from DB (source of truth) ──
    const existingDocs = await Lead.find(
      { mobileNumber: { $exists: true, $ne: null } },
      { mobileNumber: 1, _id: 0 }
    ).lean();
    const existingPhones = new Set(existingDocs.map(l => l.mobileNumber).filter(Boolean));
    console.log(`Pre-loaded ${existingPhones.size} existing phone numbers from DB`);

    // ── Scrape until we have `limit` new phone numbers ──
    const leads = await scrapeGoogleMaps(
      businessType,
      city,
      limit,
      existingPhones,
      (progress) => {
        scrapingStatus.found = progress.found;
        scrapingStatus.scraped = progress.scraped;
      }
    );

    // ── Upsert each lead using mobileNumber as source of truth ──
    for (const leadData of leads) {
      const mappedLead = {
        doctorName: leadData.name,
        googleMapLink: leadData.googleMapLink,
        businessType: leadData.businessType,
        city: leadData.city,
        fullAddress: leadData.fullAddress,
        rating: leadData.rating,
        reviewCount: leadData.reviewCount,
        mobileNumber: leadData.phoneNumber || null,
        website: leadData.website || null,
        phone: leadData.phone || null,
        source: 'Google Maps',
        createdFrom: 'google_maps_scraper',
        status: 'New'
      };

      const { score, badge } = calculateScore(mappedLead);
      mappedLead.score = score;
      mappedLead.scoreBadge = badge;

      // ── Source of truth: find by mobileNumber ──
      const existing = mappedLead.mobileNumber
        ? await Lead.findOne({ mobileNumber: mappedLead.mobileNumber })
        : null;

      if (existing) {
        // ── Enrich: fill in any fields that are missing in DB ──
        let updated = false;
        const enrichableFields = [
          'website', 'fullAddress', 'rating', 'reviewCount',
          'googleMapLink', 'businessType', 'city', 'doctorName'
        ];
        for (const key of enrichableFields) {
          if (mappedLead[key] && !existing[key]) {
            existing[key] = mappedLead[key];
            updated = true;
          }
        }
        // Always update rating + reviewCount (fresher data from scraper)
        if (mappedLead.rating && mappedLead.rating !== existing.rating) {
          existing.rating = mappedLead.rating;
          updated = true;
        }
        if (mappedLead.reviewCount && mappedLead.reviewCount !== existing.reviewCount) {
          existing.reviewCount = mappedLead.reviewCount;
          updated = true;
        }

        if (updated) {
          existing.activityTimeline.push({
            action: 'Fields Enriched',
            details: 'Missing data filled in via Google Maps scraper'
          });
          await existing.save();
        }

        scrapingStatus.merged++;
        scrapingStatus.results.unshift({ ...mappedLead, status: 'Merged' });
      } else {
        // ── New lead — insert ──
        const lead = new Lead({
          ...mappedLead,
          activityTimeline: [{ action: 'Lead Scraped', details: 'Collected via automated engine' }]
        });
        await lead.save();
        scrapingStatus.inserted++;
        scrapingStatus.results.unshift({ ...mappedLead, status: 'New' });
      }

      if (scrapingStatus.results.length > 20) scrapingStatus.results.pop();
    }

  } catch (err) {
    console.error('Scraper error:', err);
    scrapingStatus.error = err.message;
  } finally {
    scrapingStatus.active = false;
    scrapingStatus.found = scrapingStatus.inserted + scrapingStatus.merged;
  }
};

const getScraperStatus = (req, res) => {
  res.json(scrapingStatus);
};

module.exports = { runScraper, getScraperStatus };
