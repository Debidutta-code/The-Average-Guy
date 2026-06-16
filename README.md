# Lead Follow-Up CRM

A production-ready full-stack web application for solo freelancers to track lead follow-ups with ease. Optimized for one-handed mobile usage during calls.

## Features

- **Mobile-First CRM**: Fast, responsive, and easy to use on the go.
- **Dashboard**: High-level overview of total leads, today's calls, and overdue follow-ups with analytics charts.
- **Lead Management**: Searchable and filterable lead list (Clinic Name, Phone, City, Status, Priority).
- **Follow-Up System**: Manual "Save Changes" workflow after every call to update status and notes.
- **Call History Timeline**: Chronological record of every interaction per lead.
- **One-Click Actions**: Integrated tel: links for dialing and Google Maps links for navigation.
- **Analytics**: Visualization of lead conversion, call frequency, and growth.
- **Data Portability**: CSV Import/Export and JSON Backup functionality.
- **PWA**: Installable as a standalone app on mobile devices.

## Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, Lucide Icons, Recharts, React Query.
- **Backend**: Node.js, Express, TypeScript, JWT Auth.
- **Database**: MongoDB (Mongoose).

## Setup Instructions

### Backend Setup

1. Navigate to the `server` directory: `cd server`.
2. Install dependencies: `npm install`.
3. Create a `.env` file based on the environment requirements:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```
   *If `MONGODB_URI` is omitted, the app will automatically use `mongodb-memory-server` for local development.*
4. Start the development server: `npm run dev`.
5. (Optional) Seed the database: `npm run seed`.

### Frontend Setup

1. Navigate to the `client` directory: `cd client`.
2. Install dependencies: `npm install`.
3. Create a `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the development server: `npm run dev`.
5. Access the app at `http://localhost:5173`.

## Deployment

### Frontend (Vercel)
- Push the `client` directory to Vercel.
- Configure `VITE_API_URL` as an environment variable pointing to your deployed backend.

### Backend (Render/Heroku)
- Push the `server` directory.
- Configure `MONGODB_URI`, `JWT_SECRET`, and `NODE_ENV=production` as environment variables.

## Deployment Checklist

- [ ] Use a production MongoDB Atlas instance.
- [ ] Set a strong `JWT_SECRET`.
- [ ] Ensure all API endpoints are secured behind the JWT middleware.
- [ ] Verify PWA manifest loads correctly in the browser.
