const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users')
const methodOverride=require('method-override');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(methodOverride('_METHOD'));
app.use('', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.listen(3000);
app.set('view engine', 'ejs');
app.set('views','./src/views');


//trabajando con POST//

app.use(express.json());

