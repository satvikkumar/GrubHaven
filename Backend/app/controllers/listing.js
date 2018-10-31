var Emp = require('../models/employee');


exports.list = function(req, res) {

    console.log("Listing users");

    // use mongoose to get all employees
    var type = req.body.employee_type;
    var hotel = req.body.hotel_name;
    //console.log(req.body)

    Emp.find({
        employee_type: type,
        hotel_name : hotel
    }, function (err, employee) {

        if (err) {
            return next(err);
        }

        else {
            console.log(employee);
            res.send(employee);
        };


    });
}
