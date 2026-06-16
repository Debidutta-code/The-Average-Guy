import express from 'express';
import { exportLeads, importLeads, backupData, exportTemplate } from '../controllers/csvController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/template', protect, exportTemplate);
router.get('/export', protect, exportLeads);
router.post('/import', protect, importLeads);
router.get('/backup', protect, backupData);

export default router;
