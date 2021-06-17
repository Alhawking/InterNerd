const path = require('path');
const main = {
    index: (req, res) => {
        res.render('index', {
            pageTitle: 'Home'
        });
    },
    login: (req, res) => {
        res.render('login', {
            pageTitle: 'Login'
        });
    },
    register: (req, res) => {
        res.render('signup', {
            pageTitle: 'Signup'
        });
    },
    pageNav: (req, res) => {
        const optionsInNav = [
            'libros',
            'comics',
            'escritorio',
            'ropa',
            'coleccionable'
        ]
        if (optionsInNav.some(option => option === req.params.nav)) {
            res.render('pageNav', { pageTitle: req.params.nav })
        } else {
            res.send('404');
        }
    }
}

module.exports = main;