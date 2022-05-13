const { User, Admin } = require('../database/models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 404, message: 'User not found' };
  }

  user.isAdmin = false;

  return user;
};

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ where: { email, password } });

  if (!admin) {
    return { status: 404, message: 'Admin not found' };
  }

  admin.isAdmin = true;

  return admin;
};

module.exports = { login, loginAdmin };