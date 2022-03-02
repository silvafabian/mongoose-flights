import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'

const router = Router()

// GET - localhost:3000/flights
router.get('/', flightCtrl.index)
// GET - localhost:300/flights/new
router.get('/new', flightCtrl.new)
//GET - localhost:3000/flights/:id
router.get('/:id', flightCtrl.show)


// POST - localhost:3000/flights
router.post('/', flightCtrl.create)



export {
  router
}
