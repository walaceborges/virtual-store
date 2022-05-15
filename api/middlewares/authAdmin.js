const authAdmin = (req, res, next) => {
  if(req.isAdmin === true) {
    return next();
  }
  return res.status(401).json({ message: 'Não autorizado' });
};

module.exports = { authAdmin };