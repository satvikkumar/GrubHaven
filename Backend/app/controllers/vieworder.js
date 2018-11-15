var Order = require('../models/orders');

exports.view = function(req, res) {

    var name = req.body.hotel_name;

    Order.find({
        hotel_name : name,
        delivered: !true
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
exports.pullOrder = function(req, res) {

    var name = req.body.hotel_name;

    Order.find({
        hotel_name : name,
        delivered: true,
		paid: true
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
    Order.findOneAndUpdate({
        hotel_name: hotel_name,
        dish: dish,
        quantity: quantity,
        table_number : table_number
    },
    { $set: { "delivered": "true"} }
    , function (err, tables) {


        if (err) {
            console.log(err);
            return next(err);
        }
    
        else {
            res.send(tables);
        };
    });
}

exports.billing = function(req,res){

    var name = req.body.hotel_name;
    var table_number = req.body.table_number;

    Order.find({
        hotel_name : name,
        table_number: table_number,
        delivered: true,
        paid: false
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


exports.tableOrders = function(req,res){

    var name = req.body.hotel_name;
    var table_number = req.body.table_number;

    Order.find({
        hotel_name : name,
        table_number: table_number,
        delivered: false,
        paid: false
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

