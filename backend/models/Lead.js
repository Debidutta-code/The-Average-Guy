const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  doctorName: { type: String, required: true }, // Map 'name' from XLSX
  clinicName: { type: String },
  googleMapLink: { type: String },
  businessType: { type: String }, // Map 'businessType'
  city: { type: String },
  fullAddress: { type: String },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  mobileNumber: { type: String },
  website: { type: String },
  details: { type: String }, // Map 'details' manual notes

  hasPhone: { type: Boolean, default: true },
  duplicateFlag: { type: Boolean, default: false },

  phone: { type: String }, // Backward compatibility
  whatsapp: { type: String },
  email: { type: String },
  specialty: { type: String, enum: ['Dermatologist', 'Dentist', 'IVF Clinic', 'General Physician', 'Pediatrician', 'Others'], default: 'Others' },
  source: { type: String, enum: ['Google Maps', 'Practo', 'Manual', 'Other'], default: 'Manual' },
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

// Pre-save hook to set hasPhone
leadSchema.pre('save', function(next) {
    if (!this.mobileNumber && !this.phone) {
        this.hasPhone = false;
    } else {
        this.hasPhone = true;
    }
    next();
});

module.exports = mongoose.model('Lead', leadSchema);
