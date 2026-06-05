const Lead = require('../models/Lead');
const { scrapeGoogleMaps } = require('../scraper/googleMapsScraper');
const { calculateScore } = require('../services/scoringService');

// In-memory status for live updates
let scrapingStatus = {
  active: false,
  found: 0,
  inserted: 0,
  merged: 0,
  error: null,
  results: [] // Store last few for preview
};

const runScraper = async (req, res) => {
  const { businessType, city, limit = 50 } = req.body;

  if (scrapingStatus.active) {
    return res.status(400).json({ message: 'Scraper is already running' });
  }

  scrapingStatus = { active: true, found: 0, inserted: 0, merged: 0, error: null, results: [] };

  // Respond immediately to avoid timeout
  res.json({ message: 'Scraper started' });

  try {
    const leads = await scrapeGoogleMaps(businessType, city, limit, (progress) => {
        scrapingStatus.found = progress.found;
    });

    for (const leadData of leads) {
        // Map scraped fields to CRM schema
        const mappedLead = {
            doctorName: leadData.name,
            googleMapLink: leadData.googleMapLink,
            businessType: leadData.businessType,
            city: leadData.city,
            fullAddress: leadData.fullAddress,
            rating: leadData.rating,
            reviewCount: leadData.reviewCount,
            source: 'Google Maps',
            createdFrom: 'google_maps_scraper',
            status: 'New'
        };

        // Match by phoneNumber OR name + fullAddress
        let existing = null;
        if (mappedLead.mobileNumber) {
            existing = await Lead.findOne({ mobileNumber: mappedLead.mobileNumber });
        }

        if (!existing) {
            existing = await Lead.findOne({
                doctorName: mappedLead.doctorName,
                fullAddress: mappedLead.fullAddress
            });
        }

        const { score, badge } = calculateScore(mappedLead);
        mappedLead.score = score;
        mappedLead.scoreBadge = badge;

        if (existing) {
            // Merge logic
            let updated = false;
            for (let key in mappedLead) {
                if (!existing[key] && mappedLead[key]) {
                    existing[key] = mappedLead[key];
                    updated = true;
                }
            }
            if (updated) {
                existing.activityTimeline.push({
                    action: 'Fields Merged',
                    details: 'Data enriched via Google Maps scraper'
                });
                await existing.save();
            }
            scrapingStatus.merged++;
            scrapingStatus.results.unshift({ ...mappedLead, status: 'Merged' });
        } else {
            const lead = new Lead({
                ...mappedLead,
                activityTimeline: [{ action: 'Lead Scraped', details: 'Collected via automated engine' }]
            });
            await lead.save();
            scrapingStatus.inserted++;
            scrapingStatus.results.unshift({ ...mappedLead, status: 'New' });
        }

        // Keep preview list manageable
        if (scrapingStatus.results.length > 20) scrapingStatus.results.pop();
    }
  } catch (err) {
    console.error('Scraper error:', err);
    scrapingStatus.error = err.message;
  } finally {
    scrapingStatus.active = false;
  }
};

const getScraperStatus = (req, res) => {
  res.json(scrapingStatus);
};

module.exports = { runScraper, getScraperStatus };
