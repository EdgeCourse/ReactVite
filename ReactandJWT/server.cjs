const express = require('express');
const app = express();
const port = 5000; // Choose your port

app.use(express.json()); // To parse JSON request bodies

// Simplified token generation (INSECURE - FOR DEMO ONLY)
const generateToken = (username) => {
  return `fake_token_${username}`; // Replace with proper JWT generation
};

// Middleware to verify the token (INSECURE - FOR DEMO ONLY)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>
    // In a real app, verify the token using jwt.verify()
    if (token.startsWith('fake_token_')) { // Very basic check
       next(); // Token is valid (for this demo)
    } else {
      res.sendStatus(401); // Unauthorized
    }
  } else {
    res.sendStatus(401); // No token provided
  }
};

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    if (username === 'myuser' && password === 'mypassword') { // Replace with real authentication
        const token = generateToken(username);
        res.json({token});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});


app.get('/api/protected-resource', verifyToken, (req, res) => {
  // Access to this route is protected by the verifyToken middleware
  res.json({ message: 'This is protected data!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});