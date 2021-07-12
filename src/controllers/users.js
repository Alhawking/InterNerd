const path = require('path');
const users = {
    registro: (req, res) => {
        res.render('registro', {
            pageTitle: 'Registro'
        });
    },
    login: (req, res) => {
        res.render('login', {
            pageTitle: 'Login'
        });
    },
    perfil: (req, res) => {
        res.render('perfil', {
            pageTitle: 'Perfil'
        });
    }
    
    
}

module.exports = users;