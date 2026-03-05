import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import type { Category } from "../types";
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
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCategories = useCallback(async () => {
    const token = user?.token;
    const res = await axios.get<Category[]>("/api/categories", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    setCategories(
      res.data.map((cat) => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
      }))
    );
  }, [user?.token]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleOpen = (category?: Category) => {
    if (category) {
      setEditCategory(category);
      setName(category.name);
      setDescription(category.description || "");
    } else {
      setEditCategory(null);
      setName("");
      setDescription("");
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    if (editCategory) {
      await axios.put(
        `/api/categories/${editCategory.id}`,
        { name, description },
        config
      );
    } else {
      await axios.post("/api/categories", { name, description }, config);
    }
    setOpen(false);
    fetchCategories();
  };

  const handleDelete = async (id: string) => {
    const token = user?.token;
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    await axios.delete(`/api/categories/${id}`, config);
    fetchCategories();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Categories
      </Typography>
      {user?.role === "admin" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          sx={{ mb: 2 }}
        >
          Add Category
        </Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            {user?.role === "admin" && <TableCell>Actions</TableCell>}
            {user?.role === "user" && <TableCell>Select</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell>{cat.name}</TableCell>
              <TableCell>{cat.description}</TableCell>
              {user?.role === "admin" && (
                <TableCell>
                  <IconButton onClick={() => handleOpen(cat)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(cat.id)}
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
                    onClick={() => navigate(`/puzzles?category=${cat.id}`)}
                  >
                    View Puzzles
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Admin category dialog */}
      {user?.role === "admin" && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            {editCategory ? "Edit Category" : "Add Category"}
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

export default CategoryList;
