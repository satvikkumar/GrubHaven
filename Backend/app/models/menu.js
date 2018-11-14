var mongoose = require('mongoose');


var Dishes = new mongoose.Schema();

Dishes.add({
    
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

var MenuSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    dishes : [Dishes]
});

module.exports = mongoose.model('Menu', MenuSchema);

