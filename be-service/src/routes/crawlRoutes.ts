import express from 'express';
import { crawlWebsite } from '../controllers/crawlController';
import { auth } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/test', crawlWebsite);

export default router;
