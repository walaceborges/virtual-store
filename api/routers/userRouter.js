const express = require('express');
const { create, getAll, exclude } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', getAll);
router.delete('/me/:id', exclude);

module.exports = router;