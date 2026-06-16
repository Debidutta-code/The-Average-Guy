import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import csvRoutes from './routes/csvRoutes.js';

dotenv.config();

const app = express();

// Connect to Database
connectDB().then(async () => {
    if (process.env.NODE_ENV === 'development') {
        const User = (await import('./models/User.js')).default;
        const Lead = (await import('./models/Lead.js')).default;

        const userCount = await User.countDocuments();
        if (userCount === 0) {
            console.log('Seeding demo data...');
            const user = await User.create({
                name: 'Solo Freelancer',
                email: 'demo@example.com',
                password: 'password123',
            });

            const statuses = ['New Lead', 'Interested', 'Meeting Scheduled', 'Call Later', 'Not Interested', 'Client Won'];
            const priorities = ['High', 'Medium', 'Low'];
            const cities = ['Bhubaneswar', 'Cuttack', 'Mumbai', 'Delhi', 'Bangalore'];

            const leads = [];
            for (let i = 1; i <= 10; i++) {
                const followUpDate = new Date();
                followUpDate.setHours(followUpDate.getHours() + i);

                leads.push({
                    user: user._id,
                    clinicName: `Clinic ${i} Dental`,
                    contactPerson: `Dr. Person ${i}`,
                    phoneNumber: `+919999999${i.toString().padStart(2, '0')}`,
                    city: cities[i % cities.length],
                    status: statuses[i % statuses.length],
                    priority: priorities[i % priorities.length],
                    nextFollowUpDateTime: followUpDate,
                    totalCalls: 1,
                    notes: [{ date: new Date(), text: 'Seed note' }],
                    callHistory: [{ date: new Date(), status: 'New Lead', notes: 'Seed' }]
                });
            }
            await Lead.insertMany(leads);
            console.log('Demo data seeded.');
        }
    }
});

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Lead Follow-Up CRM API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/csv', csvRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
