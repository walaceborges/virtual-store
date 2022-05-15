const { User, Product } = require('../database/models');

const create = async (user) => {
  const emailExists = await User.findOne({ where: { email: user.email } });

  if (emailExists) {
    return { status: 409, message: 'O Usuário já existe' };
  }

  const createUser = await User.create(user);
  
  return createUser;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
}

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return { status: 404, message: 'Usuário não encontrado' };
  }

  return user;
}

const buyProduct = async (idProduct, idUser) => {
  const product = await Product.findOne({ where: { id: idProduct } });
  const user = await User.findOne({ where: { id: idUser } });

  if (!product || !user) {    
    return { status: 404, message: 'Produto ou usuário não encontrado' };
  }

  if(user.balance < product.price) {
    return { status: 403, message: 'Não há saldo suficiente' };
  }

  await User.update({ balance: user.balance - product.price }, { where: { id: idUser } });
  return { status: 204 };
}

const exclude = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return { status: 404, message: 'Usuário não encontrado' };
  }
  
  await User.destroy({ where: { id: id } });
  
  return { status: 204 };
};

module.exports = { create, getAll, getById, buyProduct, exclude };