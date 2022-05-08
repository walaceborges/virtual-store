const adminService = require('../services/adminService');

const create = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const response = await adminService.create({ name, password });

    if (response.status) {
      return res.status(response.status).json({ message: response.message });
    }

    return res.status(201).json({ message: 'Admin created' });
  } catch (error) {
    next(error)
  }
};

const getAll = async (_req, res, next) => {
  try {
    const admins = await adminService.getAll();
    
    return res.status(200).json(admins);
  } catch (error) {
    next(error)
  } 
};

module.exports = { create, getAll };