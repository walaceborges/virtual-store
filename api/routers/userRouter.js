const express = require('express');
const { create, getAll, buyProduct, exclude } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);
router.put('/buy', buyProduct);
router.delete('/me/:id', exclude);

module.exports = router;