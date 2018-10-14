var mongoose = require('mongoose');

var InventorySchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    ingredient: {
	type: String,
	required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    supplier: {
	type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Inventory', InventorySchema);
