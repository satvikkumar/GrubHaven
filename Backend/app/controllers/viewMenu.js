var Menu = require('../models/menu');

exports.show=function(req, res) {

    var hotel_name = req.body.hotel_name;
    console.log(req.body)
    // use mongoose to get all employees
    Menu.findOne({
        hotel_name: hotel_name
    }, function (err, menu) {

        if (err) {
            return next(err);
        }

        else {
            //console.log(tables);
            res.send(menu);
        };
    });
}