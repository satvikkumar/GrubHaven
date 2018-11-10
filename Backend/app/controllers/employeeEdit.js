var Rest = require('../models/employee');

function setUserInfo(request) {
    return {
        _id: request._id,
        hotel_name : request.hotel_name,
        employee_name : request.employee_name,
        employee_type : request.employee_type,
        address : request.address,
        contact : request.contact,
        shift_time : request.shift_time
    };
}

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

exports.add = function(req,res){

    var hotel_name = req.body.hotel_name;
    var employee_name = req.body.employee_name;
    var employee_type = req.body.employee_type; 
    var address = req.body.address;
    var contact = req.body.contact;
    var shift_time = req.body.shift_time;

    var newEmployee = new Rest({
        hotel_name : hotel_name,
        employee_name : employee_name,
        employee_type : employee_type,
        address : address,
        contact : contact,
        shift_time : shift_time
    });

    newEmployee.save(function (err, newEmployee) {

        if (err) {
            return next(err);
        }

        var employeeInfo = setUserInfo(newEmployee);

        res.status(201).json({
            newEmployee: employeeInfo
        })

    });

}

exports.deleteOne=function(req, res) {

    var hotel_name = req.body.hotel_name;
    var employee_name = req.body.employee_name;
    var employee_type = req.body.employee_type;
   
    console.log(req.body)
    // use mongoose to get all employees
    Rest.remove({
        hotel_name: hotel_name,
        employee_name : employee_name,
        employee_type : employee_type,

    }, function (err, tables) {

        if (err) {
            return next(err);
        }

        else {
            console.log("DONE");
        };


        //res.send(rest); // return all reviews in JSON format
    });
}