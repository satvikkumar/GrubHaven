var mongoose = require('mongoose');

var OrdersSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    table_number: {
	type: String,
	required: true
    },
    dish: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    delivered: {
	type: String,
	enum: ['yes', 'no']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Orders', OrdersSchema);
