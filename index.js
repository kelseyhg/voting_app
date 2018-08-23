// require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('passport');
var session = require('express-session');

// declare app variables
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

// define routes
app.get('/', function(req, res) {
	res.send('hello from the home route');
});

// listen on port 3000
app.listen(3000, function(){
	console.log("You're listening to the smooth sounds of port 3000 in the morning.");
});