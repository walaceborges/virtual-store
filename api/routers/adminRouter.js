const express = require('express');
const { create, getAll, updateUserBalance } = require('../controllers/adminController');
const { validateAdmin } = require('../middlewares/adminValidation');
const { authAdmin } = require('../middlewares/authAdmin');
const { authToken } = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, validateAdmin, authAdmin, create);
router.get('/', authToken, authAdmin, getAll);
router.put('/balance', authToken, authAdmin, updateUserBalance);

module.exports = router;