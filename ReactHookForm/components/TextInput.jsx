import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, error, helperText, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      error={!!error}
      helperText={helperText}
      {...props} // This allows you to spread props like `value`, `onChange`, `onBlur`, etc.
    />
  );
};

export default TextInput;
