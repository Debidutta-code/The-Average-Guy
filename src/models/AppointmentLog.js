const mongoose = require('mongoose');

const appointmentLogSchema = new mongoose.Schema({
  clinicName: {
    type: String,
    required: true
  },
  doctorEmail: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  patientPhone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['processing', 'success', 'failed'],
    default: 'processing'
  },
  emailStatus: {
    type: String,
    enum: ['pending', 'sent', 'failed'],
    default: 'pending'
  },
  calendarStatus: {
    type: String,
    enum: ['pending', 'created', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AppointmentLog = mongoose.model('AppointmentLog', appointmentLogSchema);

module.exports = AppointmentLog;
