import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, name, value, onChange, onBlur, error, helperText }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={helperText}
    />
  );
};

export default TextInput;