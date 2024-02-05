const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secretKey = '124';

function generateToken(email,username) {
  return jwt.sign({ email,username }, secretKey, { expiresIn: '1h' });
}

function registerUser(username, email, password) {
  const newUser = new User(username, email, password);
  // Here you would typically save the user to a database, but for simplicity, we're just returning the user.
  return newUser;
}

module.exports = {
  generateToken,
  registerUser,
};
