# Clinic Appointment Automation Backend

A private reusable automation engine for clinic websites to handle appointment bookings.

## Features
- **Email Notifications:** Sends structured emails to doctors using Nodemailer (Gmail).
- **Google Calendar Integration:** Creates events in the doctor's calendar using a Service Account.
- **Logging:** All requests and service statuses are logged in MongoDB.
- **Security:** Simple API Secret validation.

## Tech Stack
- Node.js + Express
- MongoDB (Mongoose)
- Nodemailer
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
See `env.example` for the required environment variables.

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
3. Set up environment variables based on `env.example`.
4. Start the server: `npm start`.

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
