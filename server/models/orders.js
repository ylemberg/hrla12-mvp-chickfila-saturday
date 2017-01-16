var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  Sandwich: Boolean,
  Nuggets: Boolean,
  Fries: Boolean
});

mongoose.model('orders', orderSchema);