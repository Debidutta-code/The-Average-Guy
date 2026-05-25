import express, { Request, Response } from 'express';
import { upload } from '../config/cloudinary';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/upload', protect, upload.single('image'), (req: any, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(200).json({
    url: req.file.path,
    public_id: req.file.filename,
  });
});

export default router;
