import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'

const router = Router()


router.get('/', flightCtrl.index)
// GET - localhost:3000/flights/new
router.get('/new', flightCtrl.new)


router.post('/', flightCtrl.create)

export {
  router
}
