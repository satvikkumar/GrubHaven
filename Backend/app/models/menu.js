var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    dishes : [Dishes]
});

var Dishes = new mongoose.Schema({
    
    dish_name: {
	    type: String,
	    required: true
    },
    ingr_1: {
        type: String,
        required: true
    },
    ingr_2: {
        type: String
    },
    ingr_3: {
	    type: String
    },
    cost: {
	    type: Number
    }
});

module.exports = mongoose.model('Menu', MenuSchema);

