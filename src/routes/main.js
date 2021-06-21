
const express = require('express');
const router = express.Router();
const main = require('../controllers/main');
const products = require('../controllers/products')
const users = require('../controllers/users')

router.get('/', main.index);
router.get('/login', main.login);
router.get('/signup', main.register);

router.get('/creacion-productos',products.creacion);
router.get('/detalle-productos', products.detalle);
router.get('/edicion-productos',products.edicion);
router.get('/listado-productos',products.listado);

router.get('/crear-usuario', users.registro);
router.get('/iniciar-sesion', users.login);
router.get('/perfil', users.perfil);


module.exports = router;