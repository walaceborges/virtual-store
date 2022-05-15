const isNameValid = (name) => {

  if (name.length < 8 || typeof name !== 'string') {
    return { status: 400, message: 'O "Nome" deve ter pelo menos 8 caracteres' };
  }

  return {};
};

const isEmailValid = (email) => {

  if (!email) {
    return { status: 400, message: '"email" é obrigatório' };
  }

  if (email.startsWith('@') || email.endsWith('@') || !email.includes('@')) {
    return { status: 400, message: '"email" deve ser um e-mail válido' };
  }

  return {};
};

const isPasswordValid = (password) => {

  if (!password) {
    return { status: 400, message: '"Senha" obrigatória' };
  }

  if (password.length !== 6) {
    return { status: 400, message: 'A da "senha" deve ter 6 caracteres' };
  }
  
  return {};
};

const validate = (admin) => {
  const nameValidation = isNameValid(admin.name);
  if (nameValidation.message) return nameValidation;

  const emailValidation = isEmailValid(admin.email);
  if (emailValidation.message) return emailValidation;

  const passwordValidation = isPasswordValid(admin.password);
  if (passwordValidation.message) return passwordValidation;

  return {};
};

module.exports = { validate }