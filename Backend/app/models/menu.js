var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    dish_name: {
	type: String,
	required: true
    },
    ingr_1: {
        type: String,
        required: true
    },
    ingr_2: {
        type: Number
    },
    ingr_3: {
	type: String
    },
    cost: {
	type: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Menu', MenuSchema);
