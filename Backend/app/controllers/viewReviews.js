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
			var i =0;
            console.log(arr);
			var finalReview = []
			var counter=0;
			for (i = 0; i<arr.length ; i++)
			{
				Review.find({
				   hotel_name: arr[i]
				},null,{limit : 3}, function (err2, review)  {

					if (err2) {
						console.log(err2);
						return next(err2);
					}
			
						else {
						console.log(review+'\n Review Length :'+review.length)
						for(var j = 0; j<review.length ; j++){
							finalReview.push(review[j])
						}
						counter++;
						if(counter==arr.length-1){
							res.send(finalReview)
						}
						console.log(counter);
					}
				}
				)
			}
			console.log("YO MAM IAM HERE")
			
        };
    });
}
