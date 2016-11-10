var express = require('express');
var bodyParser = require('body-parser');

var session = require('express-session');

var cors = require('cors');

var config = require('./config.js');

var app = express();

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:5000'
};

app.use(cors(corsOptions));

app.use(session({secret: config.sessionSecret,
saveUninitialized: false,
resave: false,
}));

var sandwiches = [];

app.get('/sandwich', function(req, res) {
  res.send(sandwiches);
});

app.post('/sandwich', function(req, res, next) {
  console.log(req);
  sandwiches.push(req.body);
  res.json(sandwiches);
});





app.listen(5000, function() {
  console.log('listening on 3000');
});
