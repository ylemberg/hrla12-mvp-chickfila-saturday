var express = require('express');
var bodyParser = require('body-parser');

require('./config');

var router = require('./routes');
var app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

var PORT = 3000;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});