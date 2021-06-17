const productsController = {
    detail: (req, res) => {
        res.render('products/detail', {
            pageTitle: 'Detalle'
        });
    }
}

module.exports = productsController;