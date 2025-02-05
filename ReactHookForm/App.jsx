// src/App.js
import React from 'react';
import Container from '@mui/material/Container';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Container maxWidth="sm">
      <h1>Contact Us</h1>
      <ContactForm />
    </Container>
  );
};

export default App;
