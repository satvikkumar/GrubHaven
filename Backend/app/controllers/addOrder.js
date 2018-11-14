var Order = require('../models/orders');

function setUserInfo(request) {
    return {
        _id: request._id,
        hotel_name: request.hotel_name,
        table_number: request.table_number,
        dish: request.dish,
        quantity: request.quantity
    };
}

exports.add=function(req, res) {

    var name = req.body.hotel_name;
    var table = req.body.table_number;
    var dish = req.body.dish;
    var quantity = req.body.quantity;

    var newOrder = new Order({
        hotel_name : name,
        table_number : table,
        dish : dish,
        quantity : quantity
    });

    newOrder.save(function (err, newOrder) {

        if (err) {
            return next(err);
        }

        var orderInfo = setUserInfo(newOrder);

        res.status(201).json({
            newOrder: orderInfo
        })

    });
}
