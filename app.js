const express = require('express');
const path = require('path');
const main = require('./src/controllers/main');
const app = express();
const mainRoute = require('./src/routes/main');
app.use('/public', express.static(__dirname + '/public'));
app.use('', mainRoute);
app.listen(3000);
app.set('view engine', 'ejs');