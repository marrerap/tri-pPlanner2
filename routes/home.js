var express = require('express');
var router = express.Router();
const db = require('../model/trip')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Trip Planner' });
});

router.post('/delete/:id', function(req,res) {
  const foundTrip = db.find((trip) => {
    return trip.id === parseInt(req.params.id)
  })
  db.pop(foundTrip)
  res.redirect('/')
})

module.exports = router;
