# ClinicFlow: Lead Generation System 🚀

ClinicFlow is a full-stack CRM and Lead Generation System designed specifically for agencies selling clinic websites to doctors (Dermatologists, Dentists, IVF clinics, etc.). It automates lead scoring, manages outreach via WhatsApp and Email, and provides deep analytics into your sales pipeline.

## 🧠 Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, Recharts, Axios.
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer, Puppeteer (Scraper).
- **Scoring Engine:** Custom logic to automatically identify "Hot" leads.

## 🚀 Core Features

### 1. Smart Lead Scoring
Automatically assigns a score (0-10) and badge (Hot/Warm/Cold) based on:
- **No Website (+3):** High urgency for a new site.
- **Specialty (+2):** Targeted high-value categories (Dermatologist/Dentist).
- **High Rating (+2):** Reputable clinics are easier to close.
- **Tier 2/3 City (+1):** Lower competition.
- **Has Instagram (+1):** Digitally active doctors.
- **Existing Website (-2):** Lower conversion potential.

### 2. CRM Dashboard
- **Analytics Overview:** Visual distribution of leads by score and status.
- **Lead Management:** Search, filter, and track status (New, Contacted, Interested, etc.).
- **Manual & CSV Entry:** Easy bulk import or single entry.

### 3. Integrated Outreach
- **WhatsApp Generator:** Pre-filled templates for instant intro or follow-up messages.
- **Email System:** Cold email integration using Nodemailer templates.
- **Activity Tracking:** Add notes and track status changes for every lead.

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/leadgen
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
```
Seed the database with dummy data:
```bash
npm run seed  # Note: Add "seed": "node scripts/seed.js" to package.json
```
Run the server:
```bash
node server.js
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📊 Usage Workflow

1. **Collect:** Import leads via CSV or use the manual entry form.
2. **Score:** The system automatically tags high-value prospects as "Hot".
3. **Outreach:** Click the WhatsApp button to send a personalized pitch.
4. **Track:** Update status to "Interested" and add notes after calls.
5. **Convert:** Close the deal and move the status to "Closed".

## 🔍 Scraper (Advanced)
The optional scraper in `backend/scraper/` can be used to pull leads directly from Google Maps using Puppeteer.
*Note: Ensure ethical scraping of public data only.*

---

## 🔐 Auth System
- **Admin Login:** required for all operations.
- **Credentials:** Use `admin@example.com` / `password123` (after seeding).
