# ClinicFlow: Lead Generation System 🚀

ClinicFlow is a full-stack CRM and Lead Generation System designed specifically for agencies selling clinic websites to doctors (Dermatologists, Dentists, IVF clinics, etc.). It automates lead scoring, manages outreach via WhatsApp and Email, and provides deep analytics into your sales pipeline.

## 🧠 Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React, Recharts, Axios.
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer, Puppeteer (Scraper).
- **Scoring Engine:** Custom logic to automatically identify "Hot" leads.

## 🚀 Core Features

### 1. Profile-First CRM
ClinicFlow is a profile-driven CRM. Every lead has a dedicated profile page (`/lead/:id`) which serves as the central hub for all sales activity.
- **Editable Profiles:** Update any field (name, phone, rating, etc.) inline.
- **Activity Timeline:** Automatically tracks status changes, field updates, and notes.
- **Status Pipeline:** Track leads from `New` through `Contacted`, `Follow-up`, `Interested`, and `Converted`.
- **Call Outcomes:** Log secondary outcomes like `Did Not Pick Up`, `Busy`, or `Wrong Number`.

### 2. Smart Lead Scoring (Strict CRM Logic)
Scores are calculated purely from clinical data:
- **🔥 HOT:** Has phone + Rating >= 4.3 + Review count > 20.
- **🟠 WARM:** Has phone + Rating 3.5 - 4.2.
- **❄️ COLD:** Missing phone OR Rating < 3.5.

### 3. Advanced Filtering & XLSX Import
- **Backend-Driven Filters:** Filter by status, score, city, and phone availability. Filters persist in the URL for easy sharing.
- **Smart XLSX Merge:** Import leads via XLSX. The system automatically merges duplicates (matched by phone or name+city+address) and updates missing fields without creating duplicates.

### 4. Automated Google Maps Scraper (Enrichment Engine)
The automated scraper collects fresh doctor and clinic leads directly from Google Maps. It handles searching, scrolling, and data extraction autonomously.

- **How it works:** Uses Puppeteer to automate a browser, navigates to Google Maps, searches for `{Specialty} in {City}`, and scrolls through the results to collect business details.
- **Data Extracted:** Name, Rating, Review Count, Address, Google Maps Link, and Phone Number (where available).
- **Smart Deduplication:** Scraped leads are automatically matched against existing CRM data using Phone Numbers or Name + Address. New leads are created, and existing ones are enriched with missing data.
- **Real-time Feed:** Monitor progress via a live status tracker showing leads found, inserted, and merged.

#### 🚀 Correct Usage
1. Navigate to the **Scraper** tab in the Sidebar.
2. Enter a **Specialty** (e.g., "Dermatologist") and a **City** (e.g., "Mumbai").
3. Set a **Result Limit** (max 500 per run).
4. Click **Launch Scraper**.
5. Once complete, click **View in CRM** to start outreach.

#### 🔧 Troubleshooting & Debugging
If the scraper returns `found: 0` or empty results, follow these steps:
- **Check Selectors:** Google Maps updates its UI frequently. If elements like `.qBF1Pd` (Name) or `.m6QErb` (Container) change, update `backend/scraper/googleMapsScraper.js`.
- **Wait Timing:** Slow internet can cause timeouts. Increase the delay in `await new Promise(r => setTimeout(r, 2500))` inside the auto-scroll loop.
- **Google Blocking:** Frequent scraping from the same IP may trigger CAPTCHAs. Use a VPN or proxy if necessary.
- **Browser Launch:** Ensure the environment has dependencies for Puppeteer (`--no-sandbox` is enabled by default in this system).

#### 📊 Expected Output Format
The API returns a summary of the run:
- `found`: Total unique businesses identified on the page.
- `inserted`: New leads added to the database.
- `merged`: Existing leads updated with new information.

### 5. Integrated Outreach
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
