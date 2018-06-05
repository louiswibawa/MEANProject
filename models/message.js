var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// model/blueprint
var schema = new Schema({
	content: {type: String, required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// name of model is 'Message'
// name of collections by default is lowercase of model's name in plural - messages
module.exports = mongoose.model('Message', schema);
