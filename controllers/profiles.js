// requirements
var express = require('express');

// declare a new router
var router = express.Router();

// get login authorization helper
var loggedIn = require('../middleware/loggedIn');

// define routes
router.get('/', loggedIn, function(req, res){
	res.render('profile/index');
});

module.exports = router;
