var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
 
    name: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    contact: {
	type: String
    },
    
    cuisine: {
	type: String
    },
    
    img: {
        data: Buffer,
        contentType :  String
    }
 
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
