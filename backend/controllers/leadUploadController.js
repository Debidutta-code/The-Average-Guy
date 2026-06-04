const Lead = require('../models/Lead');
const { parseXLSX } = require('../utils/xlsxParser');
const { checkDuplicate } = require('../utils/dedupeLogic');
const { calculateScore } = require('../services/scoringService');
const fs = require('fs');

const uploadXLSX = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    const rawData = parseXLSX(req.file.path);
    let newLeadsCount = 0;
    let duplicatesCount = 0;
    let missingMobileCount = 0;

    for (const item of rawData) {
      // Map XLSX headers to model fields
      const leadData = {
        googleMapLink: item.googleMapLink,
        doctorName: item.name,
        businessType: item.businessType,
        city: item.city,
        fullAddress: item.fullAddress,
        rating: item.rating,
        reviewCount: item.reviewCount,
        mobileNumber: item.mobileNumber ? String(item.mobileNumber) : null,
        website: item.website,
        details: item.details,
        source: 'Google Maps',
        specialty: item.businessType?.includes('Dermatologist') ? 'Dermatologist' :
                   item.businessType?.includes('Dentist') ? 'Dentist' : 'Others'
      };

      const isDuplicate = await checkDuplicate(leadData);

      if (isDuplicate) {
        duplicatesCount++;
        continue;
      }

      if (!leadData.mobileNumber) {
        missingMobileCount++;
      }

      const { score, badge } = calculateScore(leadData);
      const lead = new Lead({ ...leadData, score, scoreBadge: badge });
      await lead.save();
      newLeadsCount++;
    }

    fs.unlinkSync(req.file.path);

    res.json({
      processed: rawData.length,
      added: newLeadsCount,
      duplicates: duplicatesCount,
      missingMobile: missingMobileCount
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { uploadXLSX };
