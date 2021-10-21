const { Schema, model } = require('mongoose')

const Order = new Schema({
  start: { type: Date, default: Date.now },
  finish: { type: Date, default: null },
  status: {ref: 'OrderStatus', type: String, default: 'active'},
  opened_by: { ref: 'User', type: Schema.Types.ObjectId, required: true },
  closed_by: { ref: 'User', type: Schema.Types.ObjectId },
  name: { type: String },
  day: { ref: Schema.Types.ObjectId }
})

module.exports = model('Order', Order)
