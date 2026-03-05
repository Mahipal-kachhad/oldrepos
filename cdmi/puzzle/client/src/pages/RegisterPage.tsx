import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

const RegisterPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (username: string, email: string, password: string) => {
    try {
      const res = await axios.post<{ user: { id: string; username: string; email: string; role: 'admin' | 'user'; }; token: string }>(
        "/api/auth/register",
        { username, email, password }
      );
      login({ ...res.data.user, token: res.data.token });
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch {
      alert('Registration failed. Please try again.');
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
      <RegisterForm onRegister={handleRegister} />
    </Box>
  );
};

export default RegisterPage;
