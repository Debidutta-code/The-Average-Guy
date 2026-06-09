const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  baseUrl: process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`,
  mongoUri: process.env.MONGO_URI,
  clinicSecret: process.env.CLINIC_SECRET,
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  google: {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    calendarId: process.env.GOOGLE_CALENDAR_ID
  }
};

module.exports = config;
