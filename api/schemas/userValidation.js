const isNameValid = (name) => {

  if (name.length < 8 || typeof name !== 'string') {
    return { status: 400, message: '"Name" length must be at least 8 characters long' };
  }

  return {};
};

const isEmailValid = (email) => {

  if (!email) {
    return { status: 400, message: '"email" is required' };
  }

  if (email.startsWith('@') || email.endsWith('@') || !email.includes('@')) {
    return { status: 400, message: '"email" must be a valid email' };
  }

  return {};
};

const isPasswordValid = (password) => {

  if (!password) {
    return { status: 400, message: '"password" is required' };
  }

  if (password.length !== 6) {
    return { status: 400, message: '"password" length must be 6 characters long' };
  }
  
  return {};
};

const validate = (user) => {
  const nameValidation = isNameValid(user.name);
  if (nameValidation.message) return nameValidation;

  const emailValidation = isEmailValid(user.email);
  if (emailValidation.message) return emailValidation;

  const passwordValidation = isPasswordValid(user.password);
  if (passwordValidation.message) return passwordValidation;

  return {};
};

module.exports = { validate }