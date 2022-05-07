const loginValidation = require('../schemas/loginValidation');

const validateLogin = (req, res, next) => {
  const validation = loginValidation.validate(req.body);

  if (validation.message) {
    return res.status(validation.status).json({ message: validation.message });
  }

  next();
};

module.exports = { validateLogin };