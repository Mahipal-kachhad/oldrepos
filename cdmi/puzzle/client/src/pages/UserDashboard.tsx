import React from 'react';
import UserNav from '../components/UserNav';
import { Box, Container, Typography } from '@mui/material';

const UserDashboard: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <UserNav />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Welcome to Puzzle App
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Browse categories and start solving puzzles using the navigation above.
        </Typography>
      </Container>
    </Box>
  );
};

export default UserDashboard;
