import React, { useState } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import { Box } from '@mui/material';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
/*
//updates test onsubmit 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
*/

//new way - updates onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Validate the specific field that changed
    let tempErrors = { ...errors }; // Copy existing errors
    if (name === 'name' && !value) {
      tempErrors.name = 'Name is required';
    } else if (name === 'email') {
      if (!value) {
        tempErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        tempErrors.email = 'Email is not valid';
      } else {
          delete tempErrors.email; // Clear error if valid
      }
    } else if (name === 'message' && !value) {
      tempErrors.message = 'Message is required';
    } else {
        delete tempErrors[name]; // Clear other field errors
    }
    setErrors(tempErrors);
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = 'Name is required';
    if (!values.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) tempErrors.email = 'Email is not valid';
    if (!values.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setValues({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextInput
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box mb={2}>
        <TextInput
          name="message"
          label="Message"
          multiline
          rows={4}
          value={values.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />
      </Box>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;