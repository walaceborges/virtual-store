const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const response = await userService.create({ name, email, password });

    if (response.status) {
      return res.status(response.status).json({ message: response.message, error: true });
    }

    return res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();
    
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  } 
};

const getById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.userId);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

const buyProduct = async (req, res, next) => {
  try {
    const { idProduct } = req.body;
    const response = await userService.buyProduct(idProduct, req.userId);

    return res.status(response.status).json({ message: response.message });
  } catch (error) {
    next(error);
  }
}

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.exclude(id);

    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }

    return res.status(response.status).end();
  } catch (error) {
    next(error);
  } 
};

module.exports = { create, getAll, getById, buyProduct, exclude };