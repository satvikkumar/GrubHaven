var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
 
    name: {
        type: String,
        unique: true
    },
    uniqueId:{
        type: String,
        required: true
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
    numTables: {
        type: Number
    },
    img: {
        type :  String
    }
 
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
