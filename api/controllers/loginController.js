const loginService = require('../services/loginService');
const { createToken } = require('../helpers/jwtToken');

const login = async (req, res, next) => {
  try { 
    const { email, password, isAdmin } = req.body;
    let loginId;

    if (isAdmin === true) {
      loginId = await loginService.loginAdmin(email, password);
      
      if (loginId.status) {
        return res.status(loginId.status).json({ message: loginId.message });
      }
    } else {
      loginId = await loginService.login(email, password);
      
      if (loginId.status) {
        return res.status(loginId.status).json({ message: loginId.message });
      }
    }

    const token = createToken({ id: loginId.id });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };