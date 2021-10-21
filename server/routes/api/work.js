const { Router } = require('express')
const router = Router()

const workController = require('../../controllers/work.controller')
const roleMiddleware = require('../../middleware/role.middleware')
const authMiddleware = require('../../middleware/auth.middleware')

router.post('/day/create', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.createDay)
router.patch('/day/close/:id', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.closeDay)
router.get('/day/:id', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.getDay)
router.get('/days', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.allDays)
router.get('/days/active', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.allDaysOpen)
router.get('/days-filter', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.allDaysFilter)

router.post('/order/new', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.newOrder)
router.get('/orders', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.allOrders)
router.post('/order/close/:id', authMiddleware, roleMiddleware(['USER', 'ADMIN']), workController.closeOrder)

module.exports = router
