var Rest = require('../models/restaurant');

exports.search=function(req, res) {

    var name = req.body.name;
    console.log(req.body)
    var address = String;
    var city = String;
    var contact = String;
    var cuisine = String;
    // use mongoose to get all employees
    Rest.findOne({
        name: new RegExp(name, 'i')
    }, function (err, restaurant) {

        if (err) {
            return next(err);
        }

        else {
            console.log(restaurant);
            res.send(restaurant);
        };


        //res.send(rest); // return all reviews in JSON format
    });
}