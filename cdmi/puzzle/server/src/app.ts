import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter';
import categoryRouter from './routes/categoryRouter';
import puzzleRouter from './routes/puzzleRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/puzzles', puzzleRouter);

export default app;
