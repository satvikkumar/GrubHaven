var Rest = require('../models/reservations');
var Order = require('../models/orders')

exports.search=function(req, res) {

    var hotel_name = req.body.hotel_name;
    var time = req.body.time;
    var date = req.body.date;
    console.log(req.body)
    // use mongoose to get all employees
    Rest.find({
        hotel_name: hotel_name,
        time: time,
        date: date
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

exports.paid = function(req,res) {

    var hotel_name = req.body.hotel_name;
    var table_number = req.body.table_number;

    Order.update({
        hotel_name : hotel_name,
        table_number : table_number
    },
    {
        $set : {paid: true}
    },
    {multi : true
    }, function (err, tables) {

        if (err) {
            return next(err);
        }

        else {
            console.log(tables);
            res.send(tables);
        };
    });
}