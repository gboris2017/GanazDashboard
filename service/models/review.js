var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
    pay: {
        type: Number
    },
    benefits: {
        type: Number
    },
    // coordinates: { type: [Number], index: '2dsphere'},
    supervisors: {
        type: Number
    },
    safety: {
        type: Number
    },
    trust: {
        type: Number
    }
});

var ReviewSchema = new Schema({
	company_user_id: {
		type: String
	},
	reviewer_user_id: {
		type: String,
        required: true
	},
    rating: {
        type: RatingSchema,
        required: true
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model('Review', ReviewSchema);