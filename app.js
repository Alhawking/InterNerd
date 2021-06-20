const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
app.use('/public', express.static(__dirname + '/public'));
app.use('', mainRoutes);
app.use('/products', productsRoutes);
app.listen(3000);
app.set('view engine', 'ejs');