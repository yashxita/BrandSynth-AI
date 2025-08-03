import express from 'express';
import { getSettings, updateSettings } from '../controllers/settingsController';
import { auth } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:brandId', auth, getSettings);
router.put('/:brandId', auth, updateSettings);

export default router;
