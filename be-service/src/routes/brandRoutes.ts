import express from 'express';
import { getBrand, updateBrand, listBrandsForUser } from '../controllers/brandController';
import { auth } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:brandId', auth, getBrand);
router.get('/my-brands', auth, listBrandsForUser);
router.put('/:brandId', auth, updateBrand);

export default router;
