var Rest = require('../models/reservations');

exports.returnAll=function(req, res) {

    var hotel_name = req.body.hotel_name;
    console.log(req.body)
    // use mongoose to get all employees
    Rest.find({
        hotel_name: hotel_name
    }, function (err, tables) {

        if (err) {
            return next(err);
        }

        else {
            console.log(tables);
            res.send(tables);
        };


        //res.send(rest); // return all reviews in JSON format
    });
}

exports.deleteOne=function(req, res) {

    var hotel_name = req.body.hotel_name;
    var time = req.body.time;
    var date = req.body.date;
    var customer_name = req.body.customer_name;
    console.log(req.body)
    // use mongoose to get all employees
    Rest.remove({
        hotel_name: hotel_name,
        time : time,
        date : date,
        customer_name : customer_name

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


exports.viewOne=function(req, res) {

    var hotel_name = req.body.hotel_name;
    var time = req.body.time;
    var date = req.body.date;
    var customer_name = req.body.customer_name;

    // use mongoose to get all employees
    Rest.findOne({
        hotel_name: hotel_name,
        time : time,
        date : date,
        customer_name : customer_name

    }, function (err, tables) {

        if (err) {
            return next(err);
        }

        else {
            console.log(tables);
            res.send(tables);
        };


        //res.send(rest); // return all reviews in JSON format
    });
}