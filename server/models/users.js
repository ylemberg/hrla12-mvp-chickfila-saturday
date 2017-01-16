var mongoose = require('mongoose');
var orderSchema = mongoose.model('orders');

var userSchema = new mongoose.Schema({
  name: String
  // orders: [orderSchema]
});

mongoose.model('users', userSchema);