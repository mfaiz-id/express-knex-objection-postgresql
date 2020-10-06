var express = require('express');
var router = express.Router();
var user_api = require('../api/controller/UserController');
/* GET users listing. */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', user_api.index);

module.exports = router;
