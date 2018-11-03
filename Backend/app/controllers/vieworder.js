var Order = require('../models/order');


exports.list = function(req, res) {

    var name = req.body.hotel_name;
    //console.log(req.body)

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
