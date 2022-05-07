const { User } = require('../database/models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 400, message: 'User not found' };
  }

  return user;
};

module.exports = { login };