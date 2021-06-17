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
        res.render('pageNav', { pageTitle: req.params.nav })
    }
}

module.exports = main;