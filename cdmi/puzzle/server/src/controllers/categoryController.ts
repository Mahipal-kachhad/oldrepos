import Category from "../models/categoryModel";
import { Request, Response } from "express";

export const getCategories = async (_: Request, res: Response) => {
  const categories = await Category.find();
  // Map _id to id for client compatibility
  res.json(
    categories.map((cat: any) => ({
      id: cat._id,
      name: cat.name,
      description: cat.description,
    }))
  );
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    res.json({
      id: category._id,
      name: category.name,
      description: category.description,
    });
  } catch {
    res.status(400).json({ error: "Create failed" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.json({
      id: category?._id,
      name: category?.name,
      description: category?.description,
    });
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
};
