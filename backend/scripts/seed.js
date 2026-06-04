const mongoose = require('mongoose');
const Lead = require('../models/Lead');
const User = require('../models/User');
const { calculateScore } = require('../services/scoringService');
require('dotenv').config();

const dummyLeads = [
  {
    doctorName: "Dr. Partha Mohapatra",
    clinicName: "NeuroCare Clinic",
    phone: "9876543210",
    email: "partha@example.com",
    city: "Bhubaneswar",
    specialty: "Others",
    source: "Manual",
    website: "https://neurocare.com",
    rating: 4.8,
    hasInstagram: true,
    status: "New"
  },
  {
    doctorName: "Dr. Smita Dash",
    clinicName: "Skin & Smile",
    phone: "9123456789",
    email: "smita@example.com",
    city: "Cuttack",
    specialty: "Dermatologist",
    source: "Google Maps",
    website: "",
    rating: 4.5,
    hasInstagram: true,
    status: "Interested"
  },
  {
    doctorName: "Dr. Rajesh Kumar",
    clinicName: "Kumar Dental Care",
    phone: "8877665544",
    email: "rajesh@example.com",
    city: "Nayapalli",
    specialty: "Dentist",
    source: "Practo",
    website: "",
    rating: 3.9,
    hasInstagram: false,
    status: "Follow-up"
  }
];

const seedDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/leadgen';
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB for seeding...');

    // Clear existing
    await Lead.deleteMany({});
    await User.deleteMany({});

    // Create Admin
    const admin = new User({
      name: "Admin",
      email: "admin@example.com",
      password: "password123"
    });
    await admin.save();
    console.log('Admin user created');

    // Create Leads
    for (let leadData of dummyLeads) {
      const { score, badge } = calculateScore(leadData);
      const lead = new Lead({ ...leadData, score, scoreBadge: badge });
      await lead.save();
    }
    console.log(`${dummyLeads.length} leads seeded`);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();
