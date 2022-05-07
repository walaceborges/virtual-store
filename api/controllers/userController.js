const userService = require('../services/userService');

const create = async (req, res, next) => {
  const { name, email, password } = req.body;
  const response = await userService.create({ name, email, password });

  if (response.status) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(201).json({ message: 'User created' });
};

const getAll = async (req, res, next) => {
  const users = await userService.getAll();
  
  return res.status(200).json(users);
};

module.exports = { create, getAll };