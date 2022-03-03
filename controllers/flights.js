import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
  const flight = new Flight(req.body)
  flight.save(function(err) {
		if (err) return res.redirect('/flights/new')
    res.redirect(`/flights/${flight._id}`)
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      error,
      flights,
      title: 'All Flights'
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function (err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function( err, meals) {
      res.render('flights/show', { 
        title: 'Flight Details', 
        flight,
        meals,
      })
    })
  })
}
function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/edit', {
      flight,
      err,
      title: "Edit Flight"
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addMeal(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.meals.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.id(req.params.ticketId).remove()
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addMeal,
  deleteTicket,
}