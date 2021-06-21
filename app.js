const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main');
app.use('/public', express.static(__dirname + '/public'));
app.use('', mainRoutes);
app.listen(3000);
app.set('view engine', 'ejs');
app.set('views','./src/views');