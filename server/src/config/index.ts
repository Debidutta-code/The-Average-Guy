import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/average_guy',
  JWT_SECRET: process.env.JWT_SECRET || 'supersecretkey',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
