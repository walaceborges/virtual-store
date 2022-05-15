const { Product } = require('../database/models');

const create = async (product) => {
  const nameExists = await Product.findOne({ where: { name: product.name } });

  if (nameExists) {
    return { status: 409, message: 'Produto já registrado' };
  }

  const createProduct = await Product.create(product);
  
  return createProduct;
};

const getAll = async () => {
  const products = await Product.findAll();

  return products;
}

module.exports = { create, getAll };