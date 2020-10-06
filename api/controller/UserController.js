var User = require('../models/User');

exports.index = function(req, res) {
    User.query()
        .then(users => {
            res.json(users)
        })
};