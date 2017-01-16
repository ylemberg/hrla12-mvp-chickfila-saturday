var mongoose = require('mongoose');
var Users = mongoose.model('User');
var Orders = mongoose.model('Order');

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
  },
  post: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    Users
      .create({
        name: req.body.user
      }, (err, createdUser) => {
        if(err) {
          res.status(500).send(err);
          return;
        }
        console.log('createdUser', createdUser);
        res.status(201).send('User inserted into db');
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