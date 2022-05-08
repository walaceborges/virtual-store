const isNameValid = (name) => {

  if (name.length < 8 || typeof name !== 'string') {
    return { status: 400, message: '"Name" length must be at least 8 characters long' };
  }

  return {};
};

const isPriceValid = (price) => {

  if (!price) {
    return { status: 400, message: '"price" is required' };
  }

  return {};
};

const isImageValid = (image) => {

  if (!image) {
    return { status: 400, message: '"image" is required' };
  }
  
  return {};
};

const validate = (admin) => {
  const nameValidation = isNameValid(admin.name);
  if (nameValidation.message) return nameValidation;

  const priceValidation = isPriceValid(admin.price);
  if (priceValidation.message) return priceValidation;

  const imageValidation = isImageValid(admin.image);
  if (imageValidation.message) return imageValidation;

  return {};
};

module.exports = { validate }