var Rest = require('../models/employee');

exports.view=function(req, res) {

    var name = req.body.employee_name;
    console.log(name);
    // use mongoose to get all employees
    Rest.findOne({
        employee_name: name
    }, function (err, employee) {

        if (err) {
            console.log(err);
            return next(err);
        }

        else {
            console.log(employee);
            res.send(employee);
        };


        //res.send(rest); // return all reviews in JSON format
    });
}

exports.edit= function(req,res){

    var name = req.body.employee_name;
    var address = req.body.address;
    var contact = req.body.contact;
    var shift_time = req.body.shift_time;
    console.log(name);
    console.log(address);
    // use mongoose to get all employees
    Rest.findOneAndUpdate(
        {   employee_name: name },
        {   $set: { "address" : address, "contact" : contact, "shift_time" : shift_time } }
    , function (err, employee) {

        if (err) {
            console.log(err);
            return next(err);
        }

        else {
            console.log("hi");
            res.send(employee);
        };
    });
}