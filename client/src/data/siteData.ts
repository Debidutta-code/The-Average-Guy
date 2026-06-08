export const doctorProfile = {
  name: "Dr. Elena Vance",
  title: "Senior Consultant Dermatologist",
  specialization: "Cosmetic & Medical Dermatology",
  experience: "15+ Years",
  patients: "10,000+",
  qualifications: [
    "MD in Dermatology, Venereology & Leprosy",
    "Fellowship in Aesthetic Medicine (Germany)",
    "MBBS from Prestigious Medical College"
  ],
  certifications: [
    "Board Certified Dermatologist",
    "International Member of American Academy of Dermatology",
    "Certified Laser Specialist"
  ],
  awards: [
    "Best Dermatologist 2023",
    "Excellence in Aesthetic Medicine Award"
  ],
  philosophy: "We believe in a holistic approach to skin health, combining advanced medical science with personalized care to reveal your natural beauty.",
  training: "Extensive training in advanced laser technologies and non-invasive cosmetic procedures across Europe and Asia.",
  memberships: [
    "Member of IADVL",
    "Member of Cosmetic Dermatology Society",
    "American Academy of Dermatology (AAD)"
  ],
  publications: "Authored over 20 papers in international medical journals on acne management and laser efficacy."
};

export const treatments = [
  {
    id: "acne-treatment",
    title: "Acne Treatment",
    category: "Skin Treatments",
    slug: "acne-treatment",
    shortDescription: "Personalized acne management for clear, healthy skin.",
    fullDescription: "Comprehensive treatment plans targeting the root causes of acne using a combination of medical therapy, advanced extractions, and light-based treatments.",
    symptoms: ["Whiteheads", "Blackheads", "Pustules", "Cystic Acne"],
    causes: ["Hormonal imbalance", "Excess oil production", "Bacteria", "Clogged follicles"],
    riskFactors: ["Genetics", "Stress", "Certain medications", "Dietary factors"],
    diagnosis: "Clinical examination and sometimes hormonal profile testing.",
    procedureDetails: "Includes deep cleansing, chemical peels, or medical grade lasers depending on severity.",
    recovery: "Minimal downtime; slight redness may last for 24-48 hours.",
    expectedResults: "Reduced inflammation, fewer breakouts, and improved skin texture over 4-6 weeks.",
    benefits: ["Prevents scarring", "Boosts confidence", "Long-term control"],
    risks: ["Temporary dryness", "Sensitivity to sun"],
    faqs: [
      { question: "How many sessions are needed?", answer: "Usually 4-6 sessions for optimal results." },
      { question: "Is it painful?", answer: "Most treatments involve minimal discomfort." }
    ],
    pricing: {
      startingAt: "$150",
      sessions: "4-6 sessions recommended",
      duration: "45-60 mins"
    },
    reviews: [
      { author: "James R.", rating: 5, comment: "Incredible results for my cystic acne.", date: "2024-01-20" },
      { author: "Maria S.", rating: 5, comment: "The only clinic that finally helped me.", date: "2024-02-15" }
    ]
  },
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Cosmetic Dermatology",
    slug: "laser-hair-reduction",
    shortDescription: "Permanent solution for unwanted body hair.",
    fullDescription: "Safe and effective hair removal using US-FDA approved laser technology for all skin types.",
    symptoms: ["Unwanted hair growth"],
    causes: ["Genetic factors", "Hormonal changes"],
    riskFactors: [],
    diagnosis: "Skin and hair type assessment by our specialist.",
    procedureDetails: "Targeting hair follicles with concentrated light beams to inhibit future growth.",
    recovery: "Immediate return to daily activities; avoid sun exposure.",
    expectedResults: "Significant reduction in hair density and thickness after each session.",
    benefits: ["Pain-free", "Saves time", "Prevents ingrown hairs"],
    risks: ["Temporary redness"],
    faqs: [
      { question: "Is it permanent?", answer: "It provides long-term hair reduction." }
    ],
    pricing: {
      startingAt: "$99",
      sessions: "6-8 sessions recommended",
      duration: "30-90 mins"
    },
    reviews: [
      { author: "Linda K.", rating: 5, comment: "Totally painless and works great!", date: "2024-03-01" }
    ]
  }
];

export const locations = [
  {
    city: "Bhubaneswar",
    slug: "bhubaneswar",
    title: "Best Dermatologist in Bhubaneswar",
    description: "Expert skin care services in Bhubaneswar. Visit our state-of-the-art clinic in the heart of the city.",
    address: "123 Medical Avenue, Wellness District, Bhubaneswar 751001",
    phone: "+1 (234) 567-890",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40927361834!2d85.7504130740923!3d20.3013251509653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2a5170ad5%3A0xedc57f52ed77770!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "Acne Treatment",
    text: "Dr. Vance transformed my skin! I had struggled with adult acne for years, and now my skin is finally clear.",
    rating: 5,
    video: null
  },
  {
    name: "Michael Chen",
    treatment: "Laser Hair Reduction",
    text: "Professional staff and painless treatment. Highly recommended for laser services.",
    rating: 5,
    video: null
  }
];

export const blogPosts = [
  {
    title: "5 Tips for Managing Adult Acne",
    slug: "managing-adult-acne",
    category: "Acne",
    excerpt: "Learn how to effectively manage adult acne with these simple lifestyle changes and treatments.",
    date: "2024-03-15",
    author: "Dr. Elena Vance",
    readingTime: "5 min read",
    content: "Full blog content here...",
    faqs: [
      { question: "Can diet affect acne?", answer: "Yes, certain high-glycemic foods can trigger breakouts." }
    ]
  }
];
