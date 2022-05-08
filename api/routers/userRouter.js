const express = require('express');
const { create, getAll } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);

module.exports = router;