import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../src/models/Admin';
import { config } from '../src/config';

dotenv.config();

const seedAdmin = async () => {
  try {
    const adminName = process.env.ADMIN_NAME;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminName || !adminEmail || !adminPassword) {
      console.error('Error: ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD must be defined in environment variables.');
      process.exit(1);
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(config.MONGO_URI);
    console.log('Connected to MongoDB.');

    const adminExists = await Admin.findOne({ email: adminEmail });

    if (adminExists) {
      console.log(`Admin with email ${adminEmail} already exists. Skipping seed.`);
    } else {
      const newAdmin = new Admin({
        username: adminName,
        email: adminEmail,
        password: adminPassword,
      });

      await newAdmin.save();
      console.log('Admin user created successfully.');
    }

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
