var Review = require('../models/reviews');

function setUserInfo(request) {
    return {
        _id: request._id,
        hotel_name: request.hotel_name,
        customer_name: request.customer_name,
        review: request.review,
        rating: request.rating
    };
}

exports.add = function (req, res, next) {

    var hotel_name = req.body.hotel_name;
    var customer_name = req.body.customer_name;
    var review = req.body.review;
    var rating = req.body.rating;


        var review = new Review({
            hotel_name: hotel_name,
            customer_name: customer_name,
            review: review,
            rating: rating
        });

        review.save(function (err, review) {

            if (err) {
                return next(err);
            }

            var reviewInfo = setUserInfo(review);

            res.status(201).json({
                review: reviewInfo
            })

        });

        //res.send("SUCCESS")

}