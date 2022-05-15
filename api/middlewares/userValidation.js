const userValidation = require('../schemas/userValidation');

const validateUser = (req, res, next) => {
  const validation = userValidation.validate(req.body);

  if (validation.message) {
    return res.status(validation.status).json({ message: validation.message });
  }

  next();
};

module.exports = { validateUser };