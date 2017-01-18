var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String,
  order: {type: mongoose.Schema.Types.ObjectId, ref: 'orders'}
});

mongoose.model('User', userSchema);