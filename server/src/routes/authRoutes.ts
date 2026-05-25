import express from 'express';
import { registerAdmin, loginAdmin, getAdminProfile } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/profile', protect, getAdminProfile);

export default router;
