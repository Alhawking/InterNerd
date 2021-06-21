const path = require('path');
const users = {
    users: (req, res) => {
        res.render('users', {
            pageTitle: 'users'
        });
    }
    
    
}

module.exports = users;