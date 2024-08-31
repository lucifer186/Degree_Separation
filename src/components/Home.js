import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container className="mt-5 text-center">
      <h2>Welcome, {user.name}</h2>
      <p className="text-muted">City: {user.city}</p>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
      <Sidebar currentUser={user} />
    </Container>
  );
};

export default Home;
