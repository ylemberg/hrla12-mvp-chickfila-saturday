var mongoose = require('mongoose');
var Users = mongoose.model('User');
var Orders = mongoose.model('Order');
var utils = require('../lib/utility');

var users = {
  get: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    var sendUsers = usersToReturn => {
      res.status(200).send(usersToReturn);
    };

    Users
      .find()
      .exec((err, allUsers) => {
        if(err) {
          console.log('err', err);
          res.status(500).send(err);
          return;
        }

        var usersToReturn = [];
        allUsers.forEach((user, idx) => {
          Orders
            .findOne({_id: user.order})
            .exec((err, foundOrder) => {
              if(err) {
                res.status(500).send(err);
                return;
              }
              usersToReturn.push({user: user.name, order: foundOrder});
              if(usersToReturn.length === allUsers.length) {
                sendUsers(usersToReturn);
              }
            });
        });
      });
  },
  post: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    var orderObj = utils.getOrderObj(req.body.userOrder);
    orderObj.total = req.body.total;
    Orders
      .create(orderObj, (err, createdOrder) => {
          if(err) {
            res.status(500).send();
            return;
          }
          Users
            .create({
              name: req.body.username,
              order: createdOrder
            }, (err, createdUser) => {
              if(err) {
                res.status(500).send(err);
                return;
              }
              res.status(201).send('User inserted into db');
            });
        }
      );
  }
};

var orders = {
  get: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    res.send();
  }
};

var menuItems = {
  get: (req, res) => {
    console.log('Serving requets for ' + req.method + ' where url is ' + req.url);
    res.send(utils.getMenu());
  }
}

module.exports = {
  users: users,
  orders: orders,
  menuItems: menuItems
};