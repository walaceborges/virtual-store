const { Admin } = require('../database/models');

const create = async (admin) => {
  const nameExists = await Admin.findOne({ where: { name: admin.name } });

  if (nameExists) {
    return { status: 409, message: 'Name already registered' };
  }

  const createAdmin = await Admin.create(admin);
  
  return createAdmin;
};

const getAll = async () => {
  const admins = await Admin.findAll();

  return admins;
}

module.exports = { create, getAll };