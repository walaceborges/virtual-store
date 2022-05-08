const express = require('express');
const { create, getAll } = require('../controllers/productController');
const { validateProduct } = require('../middlewares/productValidation');

const router = express.Router();

router.post('/', validateProduct, create);
router.get('/', getAll);

module.exports = router;