const path = require('path');
const products = {
    
    products: (req, res) => {
        res.render('products', {
            pageTitle: 'products'
        });
    }
    
    
}

module.exports = products;