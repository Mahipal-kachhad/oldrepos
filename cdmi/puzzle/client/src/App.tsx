import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import CategoryList from './components/CategoryList';
import PuzzleList from './components/PuzzleList';
import PuzzleDetails from './components/PuzzleDetails';
import { useAuth } from './contexts/useAuth';
import { AuthProvider } from './contexts/AuthContext';
import theme from './theme/theme';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {user?.role === 'admin' && (
        <>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/categories" element={<CategoryList />} />
          <Route path="/admin/puzzles" element={<PuzzleList />} />
        </>
      )}
      {user?.role === 'user' && (
        <>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/puzzles" element={<PuzzleList />} />
          <Route path="/puzzles/:id" element={<PuzzleDetails />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh' }}>
          <AppRoutes />
        </Container>
      </Router>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
