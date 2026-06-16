import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod: any = null;

const connectDB = async () => {
  try {
    let dbUrl = process.env.MONGODB_URI;

    if (process.env.NODE_ENV === 'development' || !dbUrl) {
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
      console.log('Using MongoDB Memory Server');
    }

    const conn = await mongoose.connect(dbUrl!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (error) {
    console.error(`Error disconnecting from DB: ${(error as Error).message}`);
  }
};

export default connectDB;
