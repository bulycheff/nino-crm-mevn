const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Role = require('../models/Role')
const Day = require('../models/Day')
const DayStatus = require('../models/DayStatus')
const OrderStatus = require('../models/OrderStatus')

class WorkController {

  async createDay ( req, res ) {
    try {
      console.log(req.user.id)
      const day = await Day.create({ 'opened_by': req.user.id })
      day.save()
      res.json(day)
      res.status(200)
    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async closeDay ( req, res ) {
    try {
      // console.log(req.user)
      await Day.findByIdAndUpdate(req.params.id, { $set: { status: 'closed', closed_by: req.user.id, finish: Date.now() } }, { new: true })
      const days = await Day.find({ status: 'active', opened_by: req.user.id })
      res.status(200).json(days)
    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async getDay ( req, res ) {
    try {
      const day = await Day.findById(req.params.id)
      res.status(200).json(day)
    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async allDays ( req, res ) {

    try {
      const days = await Day.find({})
      res.status(200).json(await days)

    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async allDaysOpen ( req, res ) {

    try {
      const days = await Day.find({ status: 'active', opened_by: req.user.id })
      res.status(200).json(await days)

    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async allDaysFilter ( req, res ) {

    const { start, finish } = req.query
    const startDate = start ? new Date(start.substr(0, 4), start.substr(4, 2) - 1, start.substr(6, 2)) : null

    startDate.setHours(startDate.getHours() + 5)

    try {
      if (!start || !finish) {
        const days = await Day.find({})
        res.status(200).json(await days)
      } else {

      }

    } catch ( e ) {
      errorHandler(res, e)
    }
  }

  async newOrder ( req, res ) {
    try {

    } catch ( e ) {
      errorHandler(res, e)
    }

  }

  async allOrders ( req, res ) {
    try {

    } catch ( e ) {
      errorHandler(res, e)
    }

  }

  async closeOrder ( req, res ) {
    try {

    } catch ( e ) {
      errorHandler(res, e)
    }

  }

}

module.exports = new WorkController()
