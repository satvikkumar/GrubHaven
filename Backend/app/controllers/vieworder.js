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

    var id = req.body._id;

    Order.findOneAndUpdate({
        _id: id
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

