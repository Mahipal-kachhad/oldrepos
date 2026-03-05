import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Puzzle } from "../types";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
import { useAuth } from "../contexts/useAuth";

const PuzzleDetails: React.FC = () => {
  const { id } = useParams();
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const { user } = useAuth();

  const fetchPuzzle = async () => {
    if (!id) return;
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const res = await axios.get<Puzzle>(`/api/puzzles/${id}`, config);
    const p = res.data;
    setPuzzle({
      id: p.id,
      categoryId: p.categoryId,
      title: p.title,
      description: p.description,
      difficulty: p.difficulty,
      solution: p.solution,
    });
  };

  useEffect(() => {
    fetchPuzzle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user]);

  if (!puzzle) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          {puzzle.title}
        </Typography>
        <Typography variant="subtitle1" mb={1}>
          Difficulty: {puzzle.difficulty}
        </Typography>
        <Typography variant="body1" mb={2}>
          {puzzle.description}
        </Typography>
        <Typography variant="body2" color="secondary">
          Solution: {puzzle.solution}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PuzzleDetails;
