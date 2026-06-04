const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  clinicName: { type: String },
  phone: { type: String },
  whatsapp: { type: String },
  email: { type: String },
  city: { type: String },
  specialty: { type: String, enum: ['Dermatologist', 'Dentist', 'IVF Clinic', 'General Physician', 'Pediatrician', 'Others'], default: 'Others' },
  source: { type: String, enum: ['Google Maps', 'Practo', 'Manual', 'Other'], default: 'Manual' },
  website: { type: String },
  rating: { type: Number, default: 0 },
  hasInstagram: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Interested', 'Follow-up', 'Closed'],
    default: 'New'
  },
  score: { type: Number, default: 0 },
  scoreBadge: { type: String, enum: ['Hot', 'Warm', 'Cold'], default: 'Cold' },
  notes: [{
    text: String,
    createdAt: { type: Date, default: Date.now }
  }],
  followUpDate: { type: Date },
  lastContactedAt: { type: Date },
  emailsSent: [{
    subject: String,
    sentAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
