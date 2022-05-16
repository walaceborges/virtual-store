const loginService = require('../services/loginService');
const { createToken } = require('../helpers/jwtToken');

const login = async (req, res, next) => {
  try { 
    const { email, password, isAdmin } = req.body;
    let user;

    if (isAdmin === true) {
      user = await loginService.loginAdmin(email, password);
      
      if (user.status) {
        return res.status(user.status).json({ message: user.message });
      }
    } else {
      user = await loginService.login(email, password);
      
      if (user.status) {
        return res.status(user.status).json({ message: user.message });
      }
    }

    const token = createToken({ id: user.id, isAdmin: user.isAdmin });
    return res.status(200).json({ message: 'Usuario logado com sucesso', token, user: { isAdmin: user.isAdmin } });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };