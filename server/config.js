var mongoose = require('mongoose');
// var dburl = 'mongodb://localhost/chickfila';
var dburl = 'mongodb://test:test@ds111469.mlab.com:11469/chickfila';

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

process.on('SIGINT', exit).on('SIGTERM', exit);

require('./models/orders');
require('./models/users');