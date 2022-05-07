const { User } = require('../database/models');

const create = async (user) => {
  const emailExists = await User.findOne({ where: { email: user.email } });

  if (emailExists) {
    return { status: 409, message: 'User already registered' };
  }

  const createUser = await User.create(user);
  
  return createUser;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
}

module.exports = { create, getAll };