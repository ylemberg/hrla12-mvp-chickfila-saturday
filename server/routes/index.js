var router = require('express').Router();
var controller = require('.././controllers');

router.get('/users', controller.users.get);
router.post('/users', controller.users.post);

router.get('/orders', controller.orders.get);

module.exports = router;