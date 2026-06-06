const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  clinicName: { type: String },
  googleMapLink: { type: String },
  businessType: { type: String },
  city: { type: String },
  fullAddress: { type: String },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  mobileNumber: { type: String },
  website: { type: String },
  details: { type: String },

  hasPhone: { type: Boolean, default: true },
  duplicateFlag: { type: Boolean, default: false },

  phone: { type: String }, // Backward compatibility
  whatsapp: { type: String },
  email: { type: String },

  status: {
    type: String,
    enum: ['New', 'Contacted', 'Follow-up', 'Interested', 'Converted', 'Not Interested'],
    default: 'New'
  },
  callOutcome: {
    type: String,
    enum: ['Did Not Pick Up', 'Busy', 'Asked to Call Later (TTYL)', 'Wrong Number', 'Interested', 'None'],
    default: 'None'
  },
  score: { type: Number, default: 0 },
  scoreBadge: { type: String, enum: ['Hot', 'Warm', 'Cold'], default: 'Cold' },

  notes: [{
    text: String,
    createdAt: { type: Date, default: Date.now }
  }],

  activityTimeline: [{
    action: String, // e.g., 'Status Changed', 'Field Updated', 'Note Added', 'Follow-up Scheduled'
    details: String,
    createdAt: { type: Date, default: Date.now }
  }],

  followUpDate: { type: Date },
  lastContactedAt: { type: Date },
  emailsSent: [{
    subject: String,
    sentAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

leadSchema.pre('save', function(next) {
    if (!this.mobileNumber && !this.phone) {
        this.hasPhone = false;
    } else {
        this.hasPhone = true;
    }
    next();
});

module.exports = mongoose.model('Lead', leadSchema);
