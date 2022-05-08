const express = require('express');
const { login, loginAdmin } = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', validateLogin, login);
router.post('/', loginAdmin);

module.exports = router;