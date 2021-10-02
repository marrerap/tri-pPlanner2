var express = require('express');
var router = express.Router();
const db = require('../model/trip')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'New Trip' });
});

module.exports = router;
