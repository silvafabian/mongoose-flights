import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'

const router = Router()

// GET - localhost:3000/flights
router.get('/', flightCtrl.index)
// GET - localhost:300/flights/new
router.get('/new', flightCtrl.new)

// POST - localhost:3000/flights
router.post('/', flightCtrl.create)



export {
  router
}
