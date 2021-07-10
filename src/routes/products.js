const express = require('express');
const router = express.Router();
const multer=require('multer');
const path=require('path')
//configuracion disco almacenamiento multer//
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    //Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = 'img'+ '-' + file.originalname;    // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});
const uploadFile=multer({storage:multerDiskStorage});

const productsController = require('../controllers/productsController');
router.get('/detail/:id?', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/category/:categoryName', productsController.category);
router.get('/wires/:wireName', productsController.wires);
router.get('/list', productsController.allProducts);
//---POST--//
router.post('/create',uploadFile.single('imagenProducto'),productsController.createPost)

module.exports = router;