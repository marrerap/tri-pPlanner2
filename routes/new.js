const { application } = require('express');
var express = require('express');
var router = express.Router();
const db = require('../model/trip')

let id = 3

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'New Trip' });
});

router.post('/', function(req,res) {
  const newTrip = {
    id : id++,
    title : req.body.trip_title.toLowerCase().replace(" ", "_"),
    departure_date : req.body.departure_date,
    return_date : req.body.return_date
  }
  db.push(newTrip)
  console.log('New trip received', newTrip)
  res.redirect('/')
})

router.get('/new/:id', (req,res) => {
  const foundTrip = db.find((trip) => {
    return trip.id === parseInt(req.params.id)
  })
  res.render('details', {
    title: 'Details',
    trip: foundTrip
  })
})


module.exports = router;
