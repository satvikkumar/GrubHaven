var Emp = require('../models/employee');


exports.list=function(req, res) {

    console.log("Listing users");

    // use mongoose to get all employees
    Emp.find(function(err, employee) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.send(employee); // return all reviews in JSON format
    });
}
