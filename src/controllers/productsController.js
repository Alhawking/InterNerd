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

function Product(name, description, stock, price, especifications, image, red, category) {
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.especifications = especifications
    this.image = image;
    this.category = category;
    this.red = red;
}

const products = [
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko de Homero Simpson', 'Funko de Homero Simpson en su sillón en su clásica posición frente al televisor', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/Producto.jpg', 'Simpsons', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '', 'hp', 'Coleccionable')
]
const productsController = {
    detail: (req, res) => {
        res.render('products/detail', {
            pageTitle: 'Detalle',
            product: products[req.params.id]
        });
    },
    create: (req, res) => {
        res.render('products/create', {
            pageTitle: 'Crear',
            redes,
            categorias
        });
    },
    edit: (req, res) => {
        res.render('products/edit', {
            pageTitle: 'Editar',
            redes,
            categorias,
            product: products[req.params.id]
        });
    },
    category: (req, res) => {
        res.render('products/category/category', { pageTitle: req.params.categoryName.replace(/^\w/, (c) => c.toUpperCase()) })
    },
    wires: (req, res) => {
        res.send('En categoría');
    }
}

module.exports = productsController;