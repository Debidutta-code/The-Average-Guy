const Lead = require('../models/Lead');

const checkDuplicate = async (leadData) => {
  // Primary key: mobileNumber
  if (leadData.mobileNumber) {
    const existing = await Lead.findOne({ mobileNumber: leadData.mobileNumber });
    if (existing) return true;
  }

  // Fallback combination: name + city + rating
  const existingComb = await Lead.findOne({
    doctorName: leadData.name || leadData.doctorName,
    city: leadData.city,
    rating: leadData.rating
  });

  if (existingComb) return true;

  return false;
};

module.exports = { checkDuplicate };
