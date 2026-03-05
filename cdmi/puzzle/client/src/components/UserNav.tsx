import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const UserNav: React.FC = () => {
  const { logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Puzzle App
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/categories"
            sx={{ fontWeight: 500 }}
          >
            Categories
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/puzzles"
            sx={{ fontWeight: 500 }}
          >
            Puzzles
          </Button>
          <Button
            color="inherit"
            onClick={logout}
            sx={{ fontWeight: 500 }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNav;
