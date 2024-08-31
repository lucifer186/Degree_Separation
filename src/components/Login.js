import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, RowButton,Col, Row, Button } from 'react-bootstrap';

const Login = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    friends: [] 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersList = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = usersList.some(existingUser =>
      existingUser.email === user.email || existingUser.name === user.name
    );

    if (userExists) {

      alert('User with the same name or email already exists!');
      

      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {

      localStorage.setItem('user', JSON.stringify(user));


      const updatedUsersList = [...usersList, user];
      localStorage.setItem('users', JSON.stringify(updatedUsersList));

      navigate('/home');
    }
  }
  return (
    <Container className="mt-5">
      <Row>
      <Col md={6} className="d-flex align-items-center justify-content-center">
          <div>
            <h1 className="app-heading">Friend Relationship</h1>
            <h2 className="app-subheading">(Degree of Separation)</h2>
          </div>
        </Col>
        <Col md={6}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={user.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={user.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            type="text" 
            name="phone" 
            placeholder="Enter your phone number" 
            value={user.phone} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            name="city" 
            placeholder="Enter your city" 
            value={user.city} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      </Col>
      </Row>
    </Container>
  );
}

export default Login
