var Emp = require('../models/employee');


exports.list = function(req, res) {

	console.log("Listing users");
	var type = req.body.employee_type;
	console.log(req.body)
	var hotel_name =String;
        var employee_name = String;
	var address=String;
	var contact =String;
	var shift_time =String;

	
	    Emp.find({employee_type:type},function (err, empl) {

				        if (err) {
						            return next(err);
						        }

				        else {
						        res.send(empl);
					};


				    });
}

