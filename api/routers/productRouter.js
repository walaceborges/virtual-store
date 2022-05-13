const express = require('express');
const { create, getAll } = require('../controllers/productController');
const { validateProduct } = require('../middlewares/productValidation');
const { authToken } = require('../middlewares/authToken');
const { authAdmin } = require('../middlewares/authAdmin');

const router = express.Router();

router.post('/', authToken, authAdmin, validateProduct, create);
router.get('/', authToken, getAll);

module.exports = router;