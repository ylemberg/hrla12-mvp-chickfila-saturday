var mongoose = require('mongoose');
var Users = mongoose.model('users');
var Orders = mongoose.model('orders');

var users = {
  get: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    Users
      .find()
      .exec((err, allUsers) => {
        if(err) {
          console.log('err', err);
          res.status(500).send(err);
          return;
        }
        res.status(200).send(allUsers);
      });
  }
};

var orders = {
  get: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    res.send();
  }
}

module.exports = {
  users: users,
  orders: orders
};