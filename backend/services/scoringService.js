const calculateScore = (lead) => {
  // REMOVE all previous logic
  // Use ONLY XLSX data rules:
  // HOT: hasPhone=true, rating>=4.3, reviewCount>20
  // WARM: hasPhone=true, rating 3.5-4.2
  // COLD: hasPhone=false OR rating < 3.5 OR missing data

  const rating = parseFloat(lead.rating) || 0;
  const reviewCount = parseInt(lead.reviewCount) || 0;
  const hasPhone = !!(lead.mobileNumber || lead.phone);

  let score = 0;
  let badge = 'Cold';

  if (hasPhone && rating >= 4.3 && reviewCount > 20) {
    score = 9; // Hot
    badge = 'Hot';
  } else if (hasPhone && rating >= 3.5) {
    score = 6; // Warm
    badge = 'Warm';
  } else {
    score = 3; // Cold
    badge = 'Cold';
  }

  return { score, badge };
};

module.exports = { calculateScore };
