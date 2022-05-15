const productService = require('../services/productService');

const create = async (req, res, next) => {
  try {
    const { name, price, image } = req.body;
    const response = await productService.create({ name, price, image });

    if (response.status) {
      return res.status(response.status).json({ message: response.message });
    }

    return res.status(201).json({ message: 'Produto criado com sucesso' });
  } catch (error) {
    next(error)
  }
};

const getAll = async (_req, res, next) => {
  try {
    const products = await productService.getAll();
    
    return res.status(200).json(products);
  } catch (error) {
    next(error)
  } 
};

module.exports = { create, getAll };