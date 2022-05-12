const jwt = require('../helpers/jwtToken');

const tokenValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const { data } = jwt.verifyToken(authorization);
    req.userId = data.id;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidation };