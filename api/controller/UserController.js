var User = require('../models/User');
const knex = require('../../db/knex')

exports.index = async function(req, res) {
    // cara 1
    User.query()
    .then(users => {
        res.json(users)
    })

    // cara 2
    // const data_user = await knex.raw('select * from users')
    // res.json({data:data_user.rows})
};