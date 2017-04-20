var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
	job_id: {
		type: String,
		required: true
	},
	user_id: {
		type: String
	}
});

module.exports = mongoose.model('Application', ApplicationSchema);