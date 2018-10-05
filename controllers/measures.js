// requirements
var express = require('express');

// declare a new router
var router = express.Router();

// get login authorization helper
var loggedIn = require('../middleware/loggedIn');

// define routes
router.get('/i-940', loggedIn, function(req, res){
	res.render('measures/i-940')
});

router.get('/i-1631', loggedIn, function(req, res){
	res.render('measures/i-1631')
});

router.get('/i-1634', loggedIn, function(req, res){
	res.render('measures/i-1634')
});

router.get('/i-1639', loggedIn, function(req, res){
	res.render('measures/i-1639')
});

router.get('/av-19', loggedIn, function(req, res){
	res.render('measures/av-19')
});

router.get('/submit', loggedIn, function(req, res){
	res.render('measures/submit')
});

module.exports = router;
