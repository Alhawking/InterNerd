const { dir } = require('console');
const fs = require("fs");
const path = require("path");



const productsFilePath = path.join(__dirname, "../data/products.json");
const productsDB = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
        'Coleccionable',
        'Otros'
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
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko de Homero Simpson', 'Funko de Homero Simpson en su sillón en su clásica posición frente al televisor', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/Producto.jpg', 'Simpsons', 'Coleccionable'),
    new Product('Playera con logo de Marvel', 'Playera con estampado del logo de Marvel color negro.', true, 300.00, { color: 'Negro', Materiales: 'Tela' }, '/public/img/DC-playera.png', 'marvel', 'Ropa'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable'),
    new Product('Funko Harry Potter con uniforme', 'Funko de Harry Potter con uniforme de Hogwarts', true, 300.00, { Altura: 10.16, Materiales: 'PVC', peso: 0.13 }, '/public/img/HP-product.png', 'hp', 'Coleccionable')
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
        category = req.params.categoryName.replace(/^\w/, (c) => c.toUpperCase())
        res.render('products/category/category', {
            pageTitle: category,
            products: products.filter((product, i) => {
                product.id = i;
                return (product.category === category) && product.stock;
            }),
            category: req.params.categoryName
        })
    },
    wires: (req, res) => {
        wire = req.params.wireName;
        res.render('products/wires/wire', {
            pageTitle: wire,
            products: products.filter((product, i) => {
                product.id = i;
                return (product.red === wire) && product.stock;
            }),
            category: req.params.categoryName
        })
    },
    allProducts: (req, res) => {
        res.render('products/list', {
            pageTitle: 'Todos los productos',
            products: products.map((product, i) => {
                product.id = i;
                return product
            })
        })
    },
    createPost:(req,res)=>{
        let nombreImagen=req.file.filename
        let producto=req.body
        let idNuevo=productsDB[productsDB.length-1].id + 1
        let nuevoObjeto=Object.assign({id:idNuevo},producto,{image:nombreImagen})
        productsDB.push(nuevoObjeto)
		fs.writeFileSync(productsFilePath,JSON.stringify(productsDB,null,' '));
		res.redirect('/products/create')
        
    }
}

module.exports = productsController;