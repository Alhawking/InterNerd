const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
router.get('/login', usersController.login);
router.get('/signup', usersController.signup);

module.exports = router;