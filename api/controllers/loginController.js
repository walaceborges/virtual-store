const loginService = require('../services/loginService');
const { createToken } = require('../helpers/jwtToken');

const login = async (req, res, next) => {
  try {
    const  { email, password } = req.body;

    const user = await loginService.login(email, password);

    if(user.status) {
      return res.status(user.status).json({ message: user.message });
    }

    const token = createToken({ id: user.id });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const  { email, password } = req.body;

    const admin = await loginService.loginAdmin(email, password);

    if(admin.status) {
      return res.status(admin.status).json({ message: admin.message });
    }

    const token = createToken({ id: admin.id });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, loginAdmin };