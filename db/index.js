var mongoose = require('mongoose');
var dburl = 'mongodb://localhost/chickfila';

mongoose.connect(dburl);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dburl);
});
var exit = function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
};

process.on('SIGINT', exit).on('SIGTERM', exit).on('SIGUSR2', exit);

require('../server/models/orders');
require('../server/models/users');