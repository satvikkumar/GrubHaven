var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
 
    hotel_name: {
        type: String
    },
    
    employee_name: {
	type: String,
	required: true
    },
    employee_type: {
	type: String,
	required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    shift_time: {
	type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);
