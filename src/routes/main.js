const express = require('express');
const router = express.Router();
const main = require('../controllers/main');
router.get('/', main.index);
router.get('/login', main.login);
router.get('/signup', main.register);

module.exports = router;