const express = require('express');
const { create, getAll, buyProduct, getById, exclude } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);
router.get('/current', tokenValidation, getById);
router.put('/buy', tokenValidation, buyProduct);
router.delete('/me/:id', exclude);

module.exports = router;