var mongoose = require('mongoose');

var ReviewsSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    customer_name: {
	type: String,
	required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Reviews', ReviewsSchema);
