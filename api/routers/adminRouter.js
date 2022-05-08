const express = require('express');
const { create, getAll } = require('../controllers/adminController');
const { validateAdmin } = require('../middlewares/adminValidation');

const router = express.Router();

router.post('/', validateAdmin, create);
router.get('/', getAll);

module.exports = router;