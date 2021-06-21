const usersController = {
    login: (req, res) => {
        res.render('users/login', {
            pageTitle: 'Login'
        })
    },
    signup: (req, res) => {
        res.render('users/signup', {
            pageTitle: 'Registrarse'
        })
    }
}

module.exports = usersController;