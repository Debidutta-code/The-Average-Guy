const calculateScore = (lead) => {
  let score = 0;

  // Rules:
  // No website → +3
  if (!lead.website || lead.website.trim() === '') {
    score += 3;
  } else {
    // Has existing website → -2
    score -= 2;
  }

  // Dermatologist or Dentist → +2
  if (['Dermatologist', 'Dentist'].includes(lead.specialty)) {
    score += 2;
  }

  // Rating > 4.0 → +2
  if (lead.rating > 4.0) {
    score += 2;
  }

  // Tier 2/3 city → +1 (Assume if not a major metro it's Tier 2/3 for now, or just check city presence)
  // Let's simplify: if city is provided, we give +1 for now, or if it's NOT Mumbai, Delhi, Bangalore, etc.
  const metros = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'];
  if (lead.city && !metros.includes(lead.city)) {
    score += 1;
  }

  // Has Instagram → +1
  if (lead.hasInstagram) {
    score += 1;
  }

  // Clamp score between 0 and 10
  score = Math.max(0, Math.min(10, score));

  // Badge assignment
  let badge = 'Cold';
  if (score >= 8) badge = 'Hot';
  else if (score >= 5) badge = 'Warm';

  return { score, badge };
};

module.exports = { calculateScore };
