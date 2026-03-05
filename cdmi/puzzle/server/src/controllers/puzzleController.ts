import Puzzle from "../models/puzzleModel";
import { Request, Response } from "express";

export const getPuzzles = async (req: Request, res: Response) => {
  const { category } = req.query;
  const filter = category ? { categoryId: category } : {};
  const puzzles = await Puzzle.find(filter);
  // Map _id to id for client compatibility
  res.json(puzzles.map((p: any) => ({
    id: p._id,
    categoryId: p.categoryId,
    title: p.title,
    description: p.description,
    difficulty: p.difficulty,
    solution: p.solution,
  })));
};

export const getPuzzleById = async (req: Request, res: Response) => {
  const puzzle = await Puzzle.findById(req.params.id);
  if (!puzzle) return res.status(404).json({ error: "Not found" });
  if (!puzzle) return res.status(404).json({ error: "Not found" });
  res.json({
    id: puzzle._id,
    categoryId: puzzle.categoryId,
    title: puzzle.title,
    description: puzzle.description,
    difficulty: puzzle.difficulty,
    solution: puzzle.solution,
  });
};

export const createPuzzle = async (req: Request, res: Response) => {
  try {
    const { categoryId, title, description, difficulty, solution } = req.body;
    const puzzle = await Puzzle.create({
      categoryId,
      title,
      description,
      difficulty,
      solution,
    });
    res.json({
      id: puzzle._id,
      categoryId: puzzle.categoryId,
      title: puzzle.title,
      description: puzzle.description,
      difficulty: puzzle.difficulty,
      solution: puzzle.solution,
    });
  } catch {
    res.status(400).json({ error: "Create failed" });
  }
};

export const updatePuzzle = async (req: Request, res: Response) => {
  try {
    const { categoryId, title, description, difficulty, solution } = req.body;
    const puzzle = await Puzzle.findByIdAndUpdate(
      req.params.id,
      { categoryId, title, description, difficulty, solution },
      { new: true }
    );
    res.json({
      id: puzzle?._id,
      categoryId: puzzle?.categoryId,
      title: puzzle?.title,
      description: puzzle?.description,
      difficulty: puzzle?.difficulty,
      solution: puzzle?.solution,
    });
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
};

export const deletePuzzle = async (req: Request, res: Response) => {
  try {
    await Puzzle.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
};
