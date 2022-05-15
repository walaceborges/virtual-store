const { Admin, User } = require('../database/models');

const create = async (admin) => {
  const emailExists = await Admin.findOne({ where: { email: admin.email } });

  if (emailExists) {
    return { status: 409, message: 'Email já registrado' };
  }

  const createAdmin = await Admin.create(admin);
  
  return createAdmin;
};

const getAll = async () => {
  const admins = await Admin.findAll();

  return admins;
}

const updateUserBalance = async (userId, newBalance) => {
  const { balance } = await User.findOne({ where: { id: userId }, attributes: ['balance'] });

  if (!balance) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  await User.update({ balance: newBalance }, { where: { id: userId } });
}

module.exports = { create, getAll, updateUserBalance };