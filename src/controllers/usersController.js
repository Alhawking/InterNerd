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
    },
    profile: (req, res) => {
        res.render('users/profile', {
            pageTitle: 'Perfil',
            id: req.params.id
        })
    }
}

module.exports = usersController;