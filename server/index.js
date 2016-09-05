// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// CONTROLLERS //
var NamesCtrl = require('./controllers/NamesCtrl');

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = express();

app.use(express.static(__dirname + './../app'));
app.use(bodyParser.json());


// User Endpoints
app.get('/names', NamesCtrl.read);

// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
