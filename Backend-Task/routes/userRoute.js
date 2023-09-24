const express = require('express');
const { signUpValidator } = require("../middlewares/validator")
const router = express.Router();

const { regUser, getUser, getUsers, deleteUser } = require('../controllers/userController');

const auth = require('../middlewares/auth');

router.post('/register', signUpValidator, regUser);
router.get('/user', auth, getUser);
router.get('/users', auth, getUsers);
router.delete('/user', auth, deleteUser);

module.exports = router;

