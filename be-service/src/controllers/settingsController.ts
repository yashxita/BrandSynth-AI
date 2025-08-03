import { type Request, type Response } from 'express';
import Brand from '../models/Brand';
import User from '../models/User';

interface IUserPayload {
  id: string;           // user ID
  brand: string;        // brand ID
  role: 'admin' | 'editor';
}

// Helper: Verify if user has access to the brand
const userHasAccessToBrand = async (userId: string, brandId: string): Promise<boolean> => {
  const user = await User.findById(userId);
  if (!user) return false;
  return user.brand?.toString() === brandId.toString();
};

// GET /api/settings/:brandId
export const getSettings = async (req: Request, res: Response) => {
  try {
    const brandId = req.params.brandId;
    const user = (req as any).user as IUserPayload;

    if (!user || !user.id) return res.status(401).json({ message: 'Unauthorized' });

    const hasAccess = await userHasAccessToBrand(user.id, brandId as string);
    if (!hasAccess) return res.status(403).json({ message: 'Forbidden' });

    const brand = await Brand.findById(brandId).select('settings');
    if (!brand) return res.status(404).json({ message: 'Brand not found' });

    res.json({ settings: brand.settings });
  } catch (error) {
    console.error('Error fetching settings', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /api/settings/:brandId
export const updateSettings = async (req: Request, res: Response) => {
  try {
    const brandId = req.params.brandId;
    const user = (req as any).user as IUserPayload;

    if (!user || !user.id) return res.status(401).json({ message: 'Unauthorized' });

    // Only users with 'admin' role can update settings
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: admin access required' });
    }

    const hasAccess = await userHasAccessToBrand(user.id, brandId as string);
    if (!hasAccess) return res.status(403).json({ message: 'Forbidden' });

    // It's recommended to validate the input here (e.g. using Joi or zod)
    // For now, updating settings directly from request body
    const updates = req.body.settings;

    if (!updates || typeof updates !== 'object') {
      return res.status(400).json({ message: 'Invalid settings data' });
    }

    const brand = await Brand.findById(brandId);
    if (!brand) return res.status(404).json({ message: 'Brand not found' });

    brand.settings = {
      ...brand.settings,
      ...updates,
    };

    await brand.save();

    res.json({ message: 'Settings updated successfully', settings: brand.settings });
  } catch (error) {
    console.error('Error updating settings', error);
    res.status(500).json({ message: 'Server error' });
  }
};
