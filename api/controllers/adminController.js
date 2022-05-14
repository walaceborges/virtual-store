const adminService = require('../services/adminService');

const create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const response = await adminService.create({ name, email, password });

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

const updateUserBalance = async (req, res, next) => {
  try {
    console.log(req.body, 'backend');
    const { balance, userId } = req.body;
    await adminService.updateUserBalance(userId, balance);
   
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = { create, getAll, updateUserBalance };