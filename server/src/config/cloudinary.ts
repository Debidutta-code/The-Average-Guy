import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { config } from '../config';

cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // @ts-ignore
    folder: 'monarch-mug',
    allowed_formats: ['jpg', 'png', 'webp', 'jpeg'],
  },
});

export const upload = multer({ storage: storage });
