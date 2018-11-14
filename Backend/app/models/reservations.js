var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    customer_name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
	type: String,
	required: true
    },
    table_number: {
	type: String,
	required: true
    },
    contact: {
        type: String,
        required: true
    },
    OTP: {
        type: Number
    }
 
}, {
    timestamps: true
});

module.exports = mongoose.model('Reservation', ReservationSchema);
