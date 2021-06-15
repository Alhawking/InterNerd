const path = require('path');
const main = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('signup');
    }
}

module.exports = main;