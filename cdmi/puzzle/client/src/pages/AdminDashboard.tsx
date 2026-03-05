import React from 'react';
import AdminNav from '../components/AdminNav';
import { Box, Container, Typography } from '@mui/material';

const AdminDashboard: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AdminNav />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Welcome to Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Manage your categories and puzzles using the navigation above.
        </Typography>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
