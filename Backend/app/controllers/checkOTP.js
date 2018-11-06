var Rest = require('../models/reservations');

exports.check=function(req, res) {

    var OTP = req.body.OTP;
    console.log(req.body)
    // use mongoose to get all employees
    Rest.findOne({
        OTP: OTP
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