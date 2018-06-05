var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
	// reach out to DB
	// var email = ''
	// User.findOne({}, function(err, doc){
	// 	if(err){
	// 		return res.send('Error!');
	// 	}
	// 	if(doc){
	// 		email = doc.email;
	// 	}
	//     res.render('node', {email: doc.email});
	// });
	res.render('index');

});

// router.get('/message/:msg', function (req, res, next) {
//     res.render('node', {message: req.params.msg});
// });

// router.post('/', function(req, res, next){
// 	var email = req.body.email;
// 	var user = new User({
// 		firstName: 'Louis',
// 		lastName: 'Christopher',
// 		password: 'super-secret',
// 		email: email
// 	});
// 	user.save(); // store this user obj to db (SIMPLE!)
// 	res.redirect('/');
// });

module.exports = router;
