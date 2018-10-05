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

router.get('/measure-i940', loggedIn, function(req, res){
	res.render('measures/i-940')
})

router.get('/measure-i1631', loggedIn, function(req, res){
	res.render('measures/i-1631')
})

router.get('/measure-i1634', loggedIn, function(req, res){
	res.render('measures/i-1634')
})

router.get('/measure-i1639', loggedIn, function(req, res){
	res.render('measures/i-1639')
})

router.get('/measure-av19', loggedIn, function(req, res){
	res.render('measures/av-19')
})

//Define PUT routes
router.put('/measure-i940', loggedIn, function(req, res){
	console.log("the put body is", req.body)
	db.nov2018.update({
		i940: req.body.group1
	}, {
		where: {userId: req.user.id}
	}).then(function(update){
		console.log("we are getting to the the then in the put")
		res.send("Success!")
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

router.put('/measure-i1631', loggedIn, function(req, res){
	console.log("the put body is", req.body)
	db.nov2018.update({
		i1631: req.body.group1
	}, {
		where: {userId: req.user.id}
	}).then(function(update){
		console.log("we are getting to the the then in the put")
		res.send("Success!")
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

router.put('/measure-i1634', loggedIn, function(req, res){
	console.log("the put body is", req.body)
	db.nov2018.update({
		i1634: req.body.group1
	}, {
		where: {userId: req.user.id}
	}).then(function(update){
		console.log("we are getting to the the then in the put")
		res.send("Success!")
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

router.put('/measure-i1639', loggedIn, function(req, res){
	console.log("the put body is", req.body)
	db.nov2018.update({
		i1639: req.body.group1
	}, {
		where: {userId: req.user.id}
	}).then(function(update){
		console.log("we are getting to the the then in the put")
		res.send("Success!")
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

router.put('/measure-av19', loggedIn, function(req, res){
	console.log("the put body is", req.body)
	db.nov2018.update({
		av19: req.body.group1
	}, {
		where: {userId: req.user.id}
	}).then(function(update){
		console.log("we are getting to the the then in the put")
		res.send("Success!")
	}).catch(function(err){
		console.log('WELL THAT DID NOT WORK!')
	});
})

//Define POST routes
router.post('/startvote', loggedIn, function(req, res){
	console.log("THE POST IS SENDING: ", req.body)
	req.body.userId = req.user.id
	db.nov2018.create(req.body).then(function(newest){
		res.redirect("measure-i940")
		console.log('SUCCESS!')
	}).catch(function(err){
		console.log(err);
	})
})

module.exports = router;
