const path = require('path');
const products = {

    creacion: (req, res) => {
        res.render('products/creacion-productos', {
            pageTitle: 'creacion de productos'
        })
    },
    detalle: (req, res) => {
        res.render('products/detalle-productos', {
            pageTitle: 'detalle de producto'
        })
    },
    edicion: (req, res) => {
        res.render('products/edicion-productos', {
            pageTitle: 'edicion de producto'
        })
    },
    listado: (req, res) => {
        res.render('products/listado-productos', {
            pageTitle: 'listado de productos'
        })
    }
    
}

module.exports = products;