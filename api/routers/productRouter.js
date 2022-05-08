const express = require('express');
const { create, getAll } = require('../controllers/productController');
const { validateProduct } = require('../middlewares/productValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation, validateProduct, create);
router.get('/', getAll);

module.exports = router;