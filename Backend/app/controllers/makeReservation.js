var reservation = require('../models/reservations');

function getOTP(){
    var a = Math.floor(1000 + Math.random() * 9000);
    return a
}

function setUserInfo(request) {
    return {
        _id: request._id,
        hotel_name: request.hotel_name,
        customer_name: request.customer_name,
        time: request.time,
        date: request.date,
        table_number: request.table_number,
        contact: request.contact
    };
}

exports.add = function (req, res) {

    var hotel_name = req.body.hotel_name;
    var customer_name = req.body.customer_name;
    var time = req.body.time; 
    var date = req.body.date;
    var table_number = req.body.table_number;
    var contact = req.body.contact;
    var OTP = getOTP();
    console.log(OTP)

    var booking = new reservation({
            hotel_name: hotel_name,
            customer_name: customer_name,
            time: time,
            date: date,
            table_number: table_number,
            contact: contact,
            OTP: OTP
        });

        booking.save(function (err, user) {

            if (err) {
                return next(err);
            }

            var bookingInfo = setUserInfo(user);

            res.status(201).json({
                bookingInfo
            })

        });

}