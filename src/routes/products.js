const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
router.get('/detail/:id?', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/category/:categoryName', productsController.category);
router.get('/wires/:wireName', productsController.wires);
router.get('/list', productsController.allProducts);

module.exports = router;