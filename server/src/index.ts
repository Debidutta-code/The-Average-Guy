import mongoose from 'mongoose';
import app from './app';
import { config } from './config';

const startServer = async () => {
  try {
    // MongoDB connection is skipped for now as per instructions "Mongo URI will be configured later manually"
    // But I will add the logic for when it's ready.
    if (config.MONGO_URI) {
        mongoose.connect(config.MONGO_URI)
          .then(() => console.log('Connected to MongoDB'))
          .catch(err => console.error('MongoDB connection error:', err.message));
    } else {
        console.warn('MongoDB URI not provided. Database features might not work.');
    }

    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
