import React, { useState } from 'react';

function InteractiveForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isSubscribed: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData, // Spread the previous state to avoid overwriting other fields
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox and other input types
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
  

    // Optionally reset the form after submission:
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      isSubscribed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label><br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required // Example validation
      /><br /><br />

      <label htmlFor="lastName">Last Name:</label><br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="email">Email:</label><br />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required // Example validation
      /><br /><br />

      <label htmlFor="message">Message:</label><br />
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        cols="50"
      ></textarea><br /><br />

      <label htmlFor="isSubscribed">Subscribe to Newsletter:</label>
      <input
        type="checkbox"
        id="isSubscribed"
        name="isSubscribed"
        checked={formData.isSubscribed} // Use checked for checkboxes
        onChange={handleChange}
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default InteractiveForm;
