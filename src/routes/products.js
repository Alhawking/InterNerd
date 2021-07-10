const express = require('express');
const router = express.Router();
const multer=require('multer');
const path=require('path')

//configuracion disco almacenamiento multer//
const multerDS = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../Public/img'));    //Ruta donde almacenamos el archivo, si uso servidor puedo poner la ruta de mi servidor ejmplo www.miservidor.com
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let nameImage = Date.now()+path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, nameImage);         
    }
});
const uploadFile=multer({storage:multerDS});

const productsController = require('../controllers/productsController');
router.get('/detail/:id?', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/category/:categoryName', productsController.category);
router.get('/wires/:wireName', productsController.wires);
router.get('/list', productsController.allProducts);
//---POST--//
router.post('/create',uploadFile.single('imagen'),productsController.createPost)  //uploadFile.single('en el formulario me fijo el name q use')

module.exports = router;

