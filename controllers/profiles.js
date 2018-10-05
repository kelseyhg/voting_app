// requirements
var express = require('express');

// declare a new router
var router = express.Router();

// get login authorization helper
var loggedIn = require('../middleware/loggedIn');

// define GET routes
router.get('/', loggedIn, function(req, res){
	res.render('profile/index');
});

//Define POST routes
router.post('/startvote', loggedIn, function(req, res){
	req.body.userId = req.user.id
	db.nov2018.create(req.body).then(function(newest){
		res.send('success')
		console.log('SUCCESS!')
	}).catch(function(err){
		console.log(err);
	})
})

module.exports = router;
