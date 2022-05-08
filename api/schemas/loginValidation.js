const isEmailValid = (email) => {

  if (email === undefined) {
    return { status: 400, message: 'email" is required' };
  } 

  if (email === '') {
    return { status: 400, message: '"email" is not allowed to be empty'};
  }

  if(!email.includes('@', '.')) {
    return { status: 400, message: '"email" must be a valid email' };
  }

  return {};
};

const isPasswordValid = (password) => {

  if (password === undefined) {
    return { status: 400, message: '"password" is required' };
  } 

  if (password === '') {
    return { status: 400, message: '"password" is not allowed to be empty' };
  }

  if (password.length < 6) {
    return { status: 400, message: '"password" must be at least 6 characters' };
  }

  return {};
};

const validate = (login) => {
  const emailValidation = isEmailValid(login.email);
  if (emailValidation.message) return emailValidation;

  const passwordValidation = isPasswordValid(login.password);
  if (passwordValidation.message) return passwordValidation;

  return {};
};

module.exports = { validate };