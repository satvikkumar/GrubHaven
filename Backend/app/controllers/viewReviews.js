var Rest = require('../models/restaurant');
var Review = require('../models/reviews');

exports.view=function(req, res) {

    var city = req.body.city;
    console.log(city);
    
    Rest.find({
        city: city
    }, function (err, restaurant) {

        if (err) {
            console.log(err);
            return next(err);
        }

        else {
            var arr = new Array();
            for (var i =0 ; i< restaurant.length ; i++)
            {
                arr[i]=restaurant[i].name;
            }

            console.log(arr);

			Review.find({
			   hotel_name: arr
			}, function (err2, review)  {

				if (err2) {
					console.log(err2);
					return next(err2);
				}
		
				else {
					res.send(review);
				}
			}
			
			) 
        };
    });
}
