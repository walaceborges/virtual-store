const isEmailValid = (email) => {

  if (email === undefined) {
    return { status: 400, message: '"Email" obrigatório' };
  } 

  if (email === '') {
    return { status: 400, message: '"Email" não pode ser vazio' };
  }

  if(!email.includes('@', '.')) {
    return { status: 400, message: '"Email" deve ser um email válido' };
  }

  return {};
};

const isPasswordValid = (password) => {

  if (password === undefined) {
    return { status: 400, message: '"Senha" obrigatória' };
  } 

  if (password === '') {
    return { status: 400, message: '"Senha" não pode ser vazia' };
  }

  if (password.length < 6) {
    return { status: 400, message: '"A senha" deve ter pelo menos 6 caracteres' };
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