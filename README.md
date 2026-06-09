# Clinic Appointment Automation Backend

A private reusable automation engine for clinic websites to handle appointment bookings.

## Features
- **Email Notifications:** Sends structured emails to doctors using Nodemailer (Gmail).
- **WhatsApp Notifications:** Sends WhatsApp messages to doctors via Twilio.
- **Google Calendar Integration:** Creates events in the doctor's calendar using a Service Account.
- **Logging:** All requests and service statuses are logged in MongoDB.
- **Security:** Simple API Secret validation.

## Tech Stack
- Node.js + Express
- MongoDB (Mongoose)
- Nodemailer
- Twilio WhatsApp API
- Google Calendar API

## Project Structure
```text
/src
  /config
    db.js              # Database connection
    env.js             # Centralized environment variables
  /models
    AppointmentLog.js  # Mongoose schema for logs
  /services
    email.service.js   # Nodemailer integration
    whatsapp.service.js# Twilio integration
    calendar.service.js# Google Calendar integration
  /middleware
    auth.middleware.js # API Secret validation
  /controllers
    appointment.controller.js # Core logic
  /routes
    appointment.routes.js     # API routes
app.js                 # Entry point
```

## Environment Variables (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_uri

CLINIC_SECRET=your_master_secret

EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number

GOOGLE_CLIENT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY="your_private_key"
GOOGLE_CALENDAR_ID=your_calendar_id
```

## API Endpoint
### Trigger Appointment
- **URL:** `/api/trigger-appointment`
- **Method:** `POST`
- **Body:**
```json
{
  "apiSecret": "your_master_secret",
  "clinicName": "ABC Dental Clinic",
  "doctorEmail": "doctor@gmail.com",
  "doctorWhatsapp": "91xxxxxxxxxx",
  "patientName": "John Doe",
  "patientPhone": "9999999999",
  "date": "2026-06-10",
  "time": "11:30",
  "reason": "Tooth pain"
}
```

## Deployment Guide (Render/VPS)
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables in the hosting provider's dashboard.
4. Start the server: `node app.js`.

## Sample Frontend Integration
```javascript
const bookAppointment = async (data) => {
  try {
    const response = await fetch('https://your-backend-url.com/api/trigger-appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiSecret: 'your_master_secret',
        ...data
      })
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error booking appointment:', error);
  }
};
```
