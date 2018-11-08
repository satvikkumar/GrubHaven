var Order = require('../models/orders');

exports.view = function(req, res) {

    var name = req.body.hotel_name;

    Order.find({
        hotel_name : name
    }, function (err, orders) {

        if (err) {
            return next(err);
        }

        else {
            console.log(orders);
            res.send(orders);
        };


    });
}
exports.removeOne=function(req, res) {

    var hotel_name = req.body.hotel_name;
    var dish = req.body.dish;
    var quantity = req.body.quantity;
    var table_number = req.body.table_number;
    console.log(req.body)
    // use mongoose to get all employees
    Order.remove({
        hotel_name: hotel_name,
        dish: dish,
        quantity: quantity,
        table_number : table_number
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
