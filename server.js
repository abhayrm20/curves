var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined')); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'functions.html'));
 
});


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
