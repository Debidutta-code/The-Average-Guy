import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Lead from './models/Lead.js';
import connectDB from './config/db.js';

dotenv.config();

const seed = async () => {
  await connectDB();

  try {
    await User.deleteMany({});
    await Lead.deleteMany({});

    const user = await User.create({
      name: 'Solo Freelancer',
      email: 'demo@example.com',
      password: 'password123',
    });

    console.log('User created:', user.email);

    const statuses = ['New Lead', 'Interested', 'Meeting Scheduled', 'Call Later', 'Not Interested', 'Client Won'];
    const priorities = ['High', 'Medium', 'Low'];
    const cities = ['Bhubaneswar', 'Cuttack', 'Mumbai', 'Delhi', 'Bangalore'];

    const leads = [];
    for (let i = 1; i <= 20; i++) {
        const followUpDate = new Date();
        if (i < 5) followUpDate.setDate(followUpDate.getDate() - 2);
        else if (i < 12) followUpDate.setHours(followUpDate.getHours() + (i-8));
        else followUpDate.setDate(followUpDate.getDate() + 5);

        leads.push({
            user: user._id,
            clinicName: `Clinic ${i} Dental Care`,
            contactPerson: `Dr. Person ${i}`,
            phoneNumber: `+919999999${i.toString().padStart(2, '0')}`,
            city: cities[i % cities.length],
            status: statuses[i % statuses.length],
            priority: priorities[i % priorities.length] as 'High' | 'Medium' | 'Low',
            nextFollowUpDateTime: followUpDate,
            totalCalls: Math.floor(Math.random() * 5),
            notes: [{ date: new Date(), text: `Initial interest shown in a new website for clinic ${i}.` }],
            callHistory: [{ date: new Date(), status: 'New Lead', notes: 'Lead added' }]
        });
    }

    await Lead.insertMany(leads);
    console.log('20 Leads seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
