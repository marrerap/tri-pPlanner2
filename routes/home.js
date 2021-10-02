var express = require('express');
var router = express.Router();
const db = require('../model/trip')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Trip Planner' });
});

module.exports = router;
