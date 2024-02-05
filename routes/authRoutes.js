const express = require('express');
const { generateToken, registerUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // For simplicity, assuming valid input, in a real app you would need input validation and hashing passwords.
  const user = registerUser(username, email, password);

  // Generate JWT token
  const token = generateToken(email,username);

  res.json({ message: 'User registered successfully', token });
});

module.exports = router;
