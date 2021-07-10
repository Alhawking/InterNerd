const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
//agrego express-validator//
const{body}=require('express-validator')
//Validaciones//
const validationForm=[
    
    body('email')
        .notEmpty().withMessage('*Debe ingresar su casilla de correo electrónico').bail()
        .isEmail().withMessage('*Ingrese un email válido'),
    body('contrasena_Ant').isLength({min:5,max:15}).withMessage('*Ingrese contraseña válida'),
    body('confirmacion').isLength({min:5,max:15}).withMessage('*Ingrese contraseña válida'),
    body('confirmacion2').isLength({min:5,max:15}).withMessage('*Ingrese contraseña válida'),
    
]

router.get('/login', usersController.login);
router.get('/signup', usersController.signup);
router.get('/profile/:id', usersController.profile);
// rutas edicion perfil//
router.get('/edit',usersController.edit);
router.put('/edit',validationForm,usersController.editPut);
//-------------------------//
module.exports = router;