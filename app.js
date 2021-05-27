const express = require('express');
const path = require('path');
const app = express();
app.use('/public', express.static(__dirname + '/public'));
app.listen(3000);
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views/index.html')));