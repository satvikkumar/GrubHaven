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
        type: Date,
        required: true
    },
    time: {
	type: String,
	required: true
    },
    table_number: {
	type: String,
	required: true
    }
 
}, {
    timestamps: true
});

module.exports = mongoose.model('Reservation', ReservationSchema);
