var router = require('express').Router();
var controller = require('.././controllers');

router.get('/users', controller.users.get);
router.get('/orders', controller.orders.get);

module.exports = router;