import { type Request, type Response } from "express";
import Brand from "../models/Brand";
import User from "../models/User";
import { type IBrand } from "../interfaces";

// Helper: check if user can access this brand
const userHasAccessToBrand = async (
  userId: string,
  brandId: string
): Promise<boolean> => {
  const user = await User.findById(userId);
  if (!user) return false;
  return user.brand?.toString() === brandId.toString();
};

// Get brand details by ID (only if user belongs to that brand)
export const getBrand = async (req: Request, res: Response) => {
  try {
    const brandId = req.params.brandId;
    const userId = (req as any).user?.id;

    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    // Check access
    const hasAccess = await userHasAccessToBrand(userId, brandId as string);
    if (!hasAccess) return res.status(403).json({ message: "Forbidden" });

    const brand = await Brand.findById(brandId).populate("users", "email role");
    if (!brand) return res.status(404).json({ message: "Brand not found" });

    res.json(brand);
  } catch (error) {
    console.error("Error fetching brand", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update brand details by ID (only if user is admin for the brand)
export const updateBrand = async (req: Request, res: Response) => {
  try {
    const brandId = req.params.brandId;
    const userId = (req as any).user?.id;

    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    // Check the user role (must be admin)
    const user = await User.findById(userId);
    if (!user || user.brand?.toString() !== brandId || user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: admin access required" });
    }

    const updates: Partial<IBrand> = req.body;

    // You may want to whitelist fields explicitly for security
    const allowedUpdates = [
      "name",
      "primaryColors",
      "typography",
      "logoUrl",
      "imageStyle",
      "toneOfVoice",
      "settings",
    ];

    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([key]) => allowedUpdates.includes(key))
    ) as Partial<IBrand>;

    const brand = await Brand.findByIdAndUpdate(brandId, filteredUpdates, {
      new: true,
    });

    if (!brand) return res.status(404).json({ message: "Brand not found" });

    res.json({ message: "Brand updated successfully", brand });
  } catch (error) {
    console.error("Error updating brand", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: List all brands a user can access — adjust for your app's auth logic
export const listBrandsForUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    // Find user's brand(s) - assuming one brand per user
    const user = await User.findById(userId).populate("brand");
    if (!user) return res.status(404).json({ message: "User not found" });

    const brands = user.brand ? [user.brand] : [];

    res.json({ brands });
  } catch (error) {
    console.error("Error listing brands", error);
    res.status(500).json({ message: "Server error" });
  }
};
