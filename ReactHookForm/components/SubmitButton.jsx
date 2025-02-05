// src/components/SubmitButton.js
import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" color="primary" type="submit" {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
