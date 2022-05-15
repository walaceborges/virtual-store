const jwt = require('../helpers/jwtToken');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    const { data } = jwt.verifyToken(authorization);
    req.isAdmin = data.isAdmin;
    req.userId = data.id;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }
};

module.exports = { authToken };