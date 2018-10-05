// requirements
var express = require('express');
var db = require('../models');

// declare a new router
var router = express.Router();

// get login authorization helper
var loggedIn = require('../middleware/loggedIn');

// define GET routes
router.get('/', loggedIn, function(req, res){
	db.nov2018.findOne({
		where: {userId: req.params.id}
	}).then(function(voteInfo){
		res.render('profile/index', { voterInfo: voteInfo });
	}).catch(function(err){
		console.log("Trouble getting db info")
	})
	
});

//define PUT routes
router.put('/startvote/:id', loggedIn, function(req, res){
	db.nov2018.update(req.body, {
		where: {id: req.params.id}
	}).then(function(update){
		console.log("Successful put")
		res.redirect("profile/index", { voterInfo: update})
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

//Define POST routes
router.post('/startvote', loggedIn, function(req, res){
	console.log("THE POST IS SENDING: ", req.body)
	req.body.userId = req.user.id
	db.nov2018.create(req.body).then(function(newest){
		res.redirect("measures/i-940")
		console.log('SUCCESS!')
	}).catch(function(err){
		console.log(err);
	})
})

module.exports = router;
