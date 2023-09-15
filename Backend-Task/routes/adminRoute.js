const express = require('express');
const router = express.Router();

const { regAdmin, loginAdmin } = require('../controllers/adminController');

router.post('/register', regAdmin);
router.post('/login', loginAdmin);

module.exports = router;