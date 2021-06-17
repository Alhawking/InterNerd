const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/signup', mainController.register);

module.exports = router;