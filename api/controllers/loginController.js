const userService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const  { email, password } = req.body;

    const user = await userService.login(email, password);

    if(user.status) {
      return res.status(user.status).json({ message: user.message });
    }

    return res.status(200).json({ message: 'User logged in' });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };