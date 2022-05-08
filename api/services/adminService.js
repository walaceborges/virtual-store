const { Admin } = require('../database/models');

const create = async (admin) => {
  const emailExists = await Admin.findOne({ where: { email: admin.email } });

  if (emailExists) {
    return { status: 409, message: 'Email already registered' };
  }

  const createAdmin = await Admin.create(admin);
  
  return createAdmin;
};

const getAll = async () => {
  const admins = await Admin.findAll();

  return admins;
}

module.exports = { create, getAll };