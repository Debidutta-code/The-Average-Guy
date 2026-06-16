import express from 'express';
import { getStats, getChartData } from '../controllers/analyticsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/stats', protect, getStats);
router.get('/charts', protect, getChartData);

export default router;
