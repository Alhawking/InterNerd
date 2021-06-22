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
        res.reder('users/profile', {
            pageTitle: 'Perfil'
        })
    }
}

module.exports = usersController;