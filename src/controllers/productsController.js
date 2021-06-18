const productsController = {
    detail: (req, res) => {
        res.render('products/detail', {
            pageTitle: 'Detalle'
        });
    },
    create: (req, res) => {
        const redes = [
                'Marvel',
                'DC',
                'Harry Potter',
                'Star Wars',
                'Simpsons'
            ],
            categorias = [
                'Libros',
                'Cómics',
                'Escritorio',
                'Ropa',
                'Coleccionable'
            ]
        res.render('products/create', {
            pageTitle: 'Crear',
            redes,
            categorias
        });
    },
    edit: (req, res) => {
        res.render('products/edit', { pageTitle: 'Editar' });
    },
    category: (req, res) => {
        res.render('products/category/category', { pageTitle: req.params.categoryName.replace(/^\w/, (c) => c.toUpperCase()) })
    },
    wires: (req, res) => {
        res.send('En categoría');
    }
}

module.exports = productsController;