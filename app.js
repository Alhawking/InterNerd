const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users')
app.use('/public', express.static(__dirname + '/public'));
app.use('', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.listen(3000);
app.set('view engine', 'ejs');


//trabajando con POST//
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//configurando para poder usar PUT y delete//

const methodOverride=require('method-override');
app.use(methodOverride('_method'));