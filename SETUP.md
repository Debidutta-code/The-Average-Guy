# Full Setup Guide: Clinic Appointment Automation Backend

Follow these steps to get your private appointment automation service running from scratch.

## 1. Prerequisites
- **Node.js** (v18+ or latest LTS)
- **MongoDB** (Local installation or MongoDB Atlas URI)
- **Gmail Account** (for sending emails)
- **Google Cloud Account** (for Google Calendar integration)

---

## 2. Initial Setup
1. **Clone the repository** (or download the source code).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Prepare the environment file**:
   ```bash
   cp env.example .env
   ```

---

## 3. Configuration Steps

### A. Gmail (Nodemailer) Setup
To allow the backend to send emails via your Gmail account:
1. Go to your **Google Account Settings** > **Security**.
2. Enable **2-Step Verification**.
3. Search for **App Passwords**.
4. Generate a new App Password for "Mail" and "Other (Custom Name: Clinic Automation)".
5. Copy the 16-character password and paste it in `.env`:
   - `EMAIL_USER=your_email@gmail.com`
   - `EMAIL_PASS=your_16_char_app_password`

### B. Google Calendar API Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a **New Project**.
3. Go to **APIs & Services** > **Library** and enable the **Google Calendar API**.
4. Go to **APIs & Services** > **Credentials**.
5. Click **Create Credentials** > **Service Account**.
6. Give it a name and click **Create and Continue**.
7. In the Service Account list, click on your new account > **Keys** tab > **Add Key** > **Create New Key** (JSON).
8. The JSON file will download. Open it and copy the values to your `.env`:
   - `GOOGLE_CLIENT_EMAIL`: Found in the JSON as `client_email`.
   - `GOOGLE_PRIVATE_KEY`: Found in the JSON as `private_key` (copy the entire string including the `\n` characters).
9. **Final Step for Calendar**:
   - Open your Google Calendar.
   - Go to **Settings and sharing** for the calendar you want to use.
   - Find the **Calendar ID** (usually your email or a string ending in `@group.calendar.google.com`) and paste it in `.env` as `GOOGLE_CALENDAR_ID`.
   - Under **Share with specific people**, click **Add people** and paste your `GOOGLE_CLIENT_EMAIL`. Give it "Make changes to events" permission.

### C. MongoDB Setup
1. If using **MongoDB Atlas**:
   - Create a cluster, get your connection string, and paste it in `.env` as `MONGO_URI`.
2. If using **Local MongoDB**:
   - `MONGO_URI=mongodb://localhost:27017/clinic-automation`

---

## 4. Running the Application

### Development Mode
```bash
npm start
```
The server should log:
- `MongoDB Connected: ...`
- `Server running on port 5000`

### Testing the API
Use Postman or `curl` to send a test request:
```bash
curl -X POST http://localhost:5000/api/trigger-appointment \
-H "Content-Type: application/json" \
-d '{
  "apiSecret": "your_master_secret_key",
  "clinicName": "Test Clinic",
  "doctorEmail": "doctor@gmail.com",
  "patientName": "John Doe",
  "patientPhone": "9999999999",
  "date": "2026-06-10",
  "time": "11:30",
  "reason": "Routine Checkup"
}'
```

---

## 5. Deployment (e.g., Render)
1. Push your code to a GitHub repository.
2. Connect the repository to **Render**.
3. Select **Web Service**.
4. Add all environment variables from your `.env` to the **Environment** section in Render.
5. Set the build command to `npm install` and start command to `npm start`.

Your backend is now ready to receive appointment requests from any clinic website!
