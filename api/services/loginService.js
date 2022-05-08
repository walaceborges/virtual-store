const { User, Admin } = require('../database/models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 400, message: 'User not found' };
  }

  return user;
};

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ where: { email, password } });

  if (!admin) {
    return { status: 400, message: 'Admin not found' };
  }

  return admin;
};

module.exports = { login, loginAdmin };