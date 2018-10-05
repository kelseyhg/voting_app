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



module.exports = router;
