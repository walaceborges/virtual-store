require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
};

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  const decrypt = jwt.verify(token, process.env.JWT_SECRET);
  return decrypt;
};

module.exports = { createToken, verifyToken };