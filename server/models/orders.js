var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  Sandwich: Boolean,
  Nuggets: Boolean,
  Fries: Boolean
});

mongoose.model('Order', orderSchema);