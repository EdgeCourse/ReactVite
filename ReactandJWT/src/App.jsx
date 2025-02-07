import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const jwtToken = localStorage.getItem('jwtToken'); // Get token from localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/protected-resource', { // Your API endpoint
          headers: {
            Authorization: `Bearer ${jwtToken}`, // Include token in Authorization header
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
        if (err.response && err.response.status === 401) {
          // Handle 401 Unauthorized (e.g., token expired)
          console.error("Token expired or invalid. Redirecting to login.");
          localStorage.removeItem('jwtToken'); // Clear invalid token
          // Redirect to login page (e.g., using react-router-dom)
          // window.location.href = '/login';  // Or use react-router's history.push
        } else {
            console.error("API Error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (jwtToken) { // Only fetch if a token exists
      fetchData();
    } else {
      setLoading(false); // No token, set loading to false
      setError("No token available. Please login."); // Optional: Set an error message
      // Redirect to login page (e.g. window.location.href = '/login')
    }
  }, [jwtToken]); // Add jwtToken to dependency array to refetch when token changes


  const handleLogin = async () => {
    try {
        const response = await axios.post('/api/login', {
            username: 'myuser', // Replace with your login data
            password: 'mypassword'
        });

        const token = response.data.token; // Assuming your API returns a token
        localStorage.setItem('jwtToken', token); // Store token in localStorage
        // Optionally: redirect or update state to reflect logged-in status
        console.log("Logged in successfully!");

    } catch (error) {
        console.error("Login failed:", error);
        // Handle login errors (display message, etc.)
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>Protected Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the received data */}
        </div>
      ) : (
        <div>
            <p>No data available. Please login.</p>
            <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;