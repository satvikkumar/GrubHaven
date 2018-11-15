var Review = require('../models/reviews')
var Rest = require('../models/restaurant');

function calculateAverage(request){
	var hotel=request[0].hotel_name;
	var length = request.length;
	var sum=0;
	for (var i=0; i<length ; i++){
		sum+=request[i].rating;
	}
	var average = sum/length;
	var response={[hotel]:Math.round(average * 100) / 100};
	return response;
}

function sortHotels(request){
	var reqLength = Object.keys(request).length;
	console.log(reqLength);
	var items = Object.keys(request).map(function(key) {
					return [key, request[key]];
				});
	
	items.sort(function(first, second) {
				return second[1] - first[1];
			});
	console.log(items);
	return items.slice(0,5);
}

exports.recommend = function(req,res){
	var recommend={};
	Rest.find({
        city: 'Bangalore'
    },function (err, restaurant) {
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
				var counter=0;
				for (var i = 0; i<arr.length ; i++)
				{
					Review.find({
					   hotel_name: arr[i]
					}, function (err2, review)  {
						
					if (err2) {
							console.log(err2);
							return next(err2);
						}
					else {
						//console.log(review);
						recommend = Object.assign({},recommend,calculateAverage(review));
						//recommend.push(calculateAverage(review));
						//console.log(recommend)
						counter++;
						if(counter==arr.length){
								res.send(sortHotels(recommend));
								//res.send('Hi');
							}
						}
					}
					)
				}
			};	
	});			
}