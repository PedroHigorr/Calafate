let express = require('express');
let db = require('../utils/db');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wes Anderson' });
});

module.exports = router;
