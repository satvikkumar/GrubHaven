var Rest = require('../models/restaurant');

exports.authorize=function(req, res) {

    var name = req.body.name;
    var uniqueId = req.body.uniqueId;
    console.log(req.body)
    // use mongoose to get all employees
    Rest.findOne({
        name: name,
        uniqueId: uniqueId 
    }, function (err, restaurant) {

        if (err) {
            res.send(err);
            return next(err);
        }

        else {
            console.log(restaurant);
            res.send(restaurant);
        };


        //res.send(rest); // return all reviews in JSON format
    });
}