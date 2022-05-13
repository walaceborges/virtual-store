const express = require('express');
const { create, getAll, buyProduct, getById, exclude } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');
const { authToken } = require('../middlewares/authToken');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);
router.get('/current', authToken, getById);
router.put('/buy', authToken, buyProduct);
router.delete('/me/:id', exclude);

module.exports = router;