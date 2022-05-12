const express = require('express');
const { create, getAll, buyProduct, exclude } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);
router.put('/buy', tokenValidation, buyProduct);
router.delete('/me/:id', exclude);

module.exports = router;