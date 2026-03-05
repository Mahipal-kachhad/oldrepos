import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Puzzle, Category } from "../types";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const PuzzleList: React.FC = () => {
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [editPuzzle, setEditPuzzle] = useState<Puzzle | null>(null);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );
  const [solution, setSolution] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCategories();
    fetchPuzzles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const fetchCategories = async () => {
    const res = await axios.get<Category[]>("/api/categories");
    setCategories(res.data);
  };

  const fetchPuzzles = async () => {
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const params = new URLSearchParams(location.search);
    const categoryId = params.get("category");
    let url = "/api/puzzles";
    if (categoryId) url += `?category=${categoryId}`;
    const res = await axios.get<Puzzle[]>(url, config);
    setPuzzles(
      res.data.map((p) => ({
        id: p.id,
        categoryId: p.categoryId,
        title: p.title,
        description: p.description,
        difficulty: p.difficulty,
        solution: p.solution,
      }))
    );
  };

  const handleOpen = (puzzle?: Puzzle) => {
    if (puzzle) {
      setEditPuzzle(puzzle);
      setCategoryId(puzzle.categoryId);
      setTitle(puzzle.title);
      setDescription(puzzle.description);
      setDifficulty(puzzle.difficulty);
      setSolution(puzzle.solution);
    } else {
      setEditPuzzle(null);
      setCategoryId("");
      setTitle("");
      setDescription("");
      setDifficulty("easy");
      setSolution("");
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    if (editPuzzle) {
      await axios.put(
        `/api/puzzles/${editPuzzle.id}`,
        {
          categoryId,
          title,
          description,
          difficulty,
          solution,
        },
        config
      );
    } else {
      await axios.post(
        "/api/puzzles",
        {
          categoryId,
          title,
          description,
          difficulty,
          solution,
        },
        config
      );
    }
    setOpen(false);
    fetchPuzzles();
  };

  const handleDelete = async (id: string) => {
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    await axios.delete(`/api/puzzles/${id}`, config);
    fetchPuzzles();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Puzzles
      </Typography>
      {user?.role === "admin" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          sx={{ mb: 2 }}
        >
          Add Puzzle
        </Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Difficulty</TableCell>
            {user?.role === "admin" && <TableCell>Actions</TableCell>}
            {user?.role === "user" && <TableCell>Select</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {puzzles.map((puzzle) => (
            <TableRow key={puzzle.id}>
              <TableCell>{puzzle.title}</TableCell>
              <TableCell>
                {categories.find((c) => c.id === puzzle.categoryId)?.name || ""}
              </TableCell>
              <TableCell>{puzzle.difficulty}</TableCell>
              {user?.role === "admin" && (
                <TableCell>
                  <IconButton onClick={() => handleOpen(puzzle)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(puzzle.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
              {user?.role === "user" && (
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/puzzles/${puzzle.id}`)}
                  >
                    View
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Admin puzzle dialog */}
      {user?.role === "admin" && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editPuzzle ? "Edit Puzzle" : "Add Puzzle"}</DialogTitle>
          <DialogContent>
            <Select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value as string)}
              fullWidth
              displayEmpty
              sx={{ mb: 2 }}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value as "easy" | "medium" | "hard")
              }
              fullWidth
              sx={{ mb: 2 }}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
            <TextField
              label="Solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default PuzzleList;
