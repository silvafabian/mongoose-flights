import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'

const router = Router()

// GET - localhost:3000/flights
router.get('/', flightCtrl.index)
// GET - localhost:300/flights/new
router.get('/new', flightCtrl.new)
//GET - localhost:3000/flights/:id
router.get('/:id', flightCtrl.show)
// GET -localhost:3000/flights/:id/edit
router.get("/:id/edit", flightCtrl.edit)


// POST - localhost:3000/flights
router.post('/', flightCtrl.create)


// DELETE - localhost:3000/flights/:id
router.delete('/:id', flightCtrl.delete)

//PUT - localhost:3000/flights/:id
router.put('/:id', flightCtrl.update)

// POST - localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightCtrl.createTicket)

router.post('/:id/meals', flightCtrl.addMeal)


export {
  router
}
