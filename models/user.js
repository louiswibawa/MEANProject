var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// model/blueprint
var schema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true}, // unique is a property of mongoose but not validated automatically
	messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(mongooseUniqueValidator);

// name of model is 'User'
// name of collections by default is lowercase of model's name in plural - users
module.exports = mongoose.model('User', schema);
