const productValidation = require('../schemas/productValidation');

const validateProduct = (req, res, next) => {
  const validation = productValidation.validate(req.body);

  if (validation.message) {
    return res.status(validation.status).json({ message: validation.message });
  }

  next();
};

module.exports = { validateProduct };