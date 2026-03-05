import mongoose from 'mongoose';

const puzzleSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  solution: { type: String, required: true },
});

export default mongoose.model('Puzzle', puzzleSchema);
