const jwt = require('../helpers/jwtToken');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const { data } = jwt.verifyToken(authorization);
    console.log(data);
    req.isAdmin = data.isAdmin;
    req.userId = data.id;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { authToken };