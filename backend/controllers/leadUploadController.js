const Lead = require('../models/Lead');
const { parseXLSX } = require('../utils/xlsxParser');
const { calculateScore } = require('../services/scoringService');
const fs = require('fs');

const uploadXLSX = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    const rawData = parseXLSX(req.file.path);
    let newLeadsCount = 0;
    let mergedCount = 0;
    let missingMobileCount = 0;

    for (const item of rawData) {
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
      };

      // Match by phoneNumber OR name + city + address
      let existing = null;
      if (leadData.mobileNumber) {
        existing = await Lead.findOne({ mobileNumber: leadData.mobileNumber });
      }

      if (!existing) {
        existing = await Lead.findOne({
            doctorName: leadData.doctorName,
            city: leadData.city,
            fullAddress: leadData.fullAddress
        });
      }

      const { score, badge } = calculateScore(leadData);

      if (existing) {
        // Merge records: Update missing fields only
        let updated = false;
        for (let key in leadData) {
            if (!existing[key] && leadData[key]) {
                existing[key] = leadData[key];
                updated = true;
            }
        }
        if (updated) {
            existing.activityTimeline.push({
                action: 'Fields Merged',
                details: 'Incomplete fields updated via XLSX import'
            });
            await existing.save();
        }
        mergedCount++;
      } else {
        if (!leadData.mobileNumber) missingMobileCount++;

        const lead = new Lead({
            ...leadData,
            score,
            scoreBadge: badge,
            activityTimeline: [{ action: 'Lead Created', details: 'Imported via XLSX' }]
        });
        await lead.save();
        newLeadsCount++;
      }
    }

    fs.unlinkSync(req.file.path);

    res.json({
      processed: rawData.length,
      added: newLeadsCount,
      merged: mergedCount,
      missingMobile: missingMobileCount
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { uploadXLSX };
