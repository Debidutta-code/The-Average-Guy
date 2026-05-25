import express from 'express';
import { protect } from '../middleware/authMiddleware';
import * as communityController from '../controllers/communityController';

const router = express.Router();

router.get('/', communityController.getCommunitySettings);
router.get('/:id', communityController.getOneCommunitySettings);

router.post('/', protect, communityController.createCommunitySettings);
router.patch('/:id', protect, communityController.updateCommunitySettings);
router.delete('/:id', protect, communityController.deleteCommunitySettings);

export default router;
