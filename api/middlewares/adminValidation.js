const adminValidation = require('../schemas/adminValidation');

const validateAdmin = (req, res, next) => {
  const validation = adminValidation.validate(req.body);

  if (validation.message) {
    return res.status(validation.status).json({ message: validation.message });
  }

  next();
};

module.exports = { validateAdmin };