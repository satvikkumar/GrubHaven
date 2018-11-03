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
        type: Array,
        default: [],
        required: true
    },
    quantity: {
        type: Array,
        default: [],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Orders', OrdersSchema);