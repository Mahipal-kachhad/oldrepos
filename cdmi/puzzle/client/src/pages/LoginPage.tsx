import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const res = await axios.post<{ user: { id: string; username: string; email: string; role: 'admin' | 'user'; }; token: string }>(
        "/api/auth/login",
        { username, password }
      );
      login({ ...res.data.user, token: res.data.token });
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch{
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}
    >
      <LoginForm onLogin={handleLogin} />
    </Box>
  );
};

export default LoginPage;
