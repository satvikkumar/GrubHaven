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
exports.orderdetail=function(req, res) {

    var name = req.body.hotel_name;
    var table = req.body.table_no;

    Order.find({
        hotel_name : name,
        table_number : table
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
