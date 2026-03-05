import { Router } from 'express';
import { getPuzzles, getPuzzleById, createPuzzle, updatePuzzle, deletePuzzle } from '../controllers/puzzleController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getPuzzles);
router.get('/:id', authMiddleware, getPuzzleById);
router.post('/', authMiddleware, adminMiddleware, createPuzzle);
router.put('/:id', authMiddleware, adminMiddleware, updatePuzzle);
router.delete('/:id', authMiddleware, adminMiddleware, deletePuzzle);

export default router;
