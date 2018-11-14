var Rest = require('../models/reservations');

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