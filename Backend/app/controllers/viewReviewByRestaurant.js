var Review = require('../models/reviews');

exports.view=function(req, res) {

    var rname = req.body.name;
    
    Review.find({
        hotel_name: rname
     }, function (err2, review)  {

         if (err2) {
             console.log(err2);
             return next(err2);
         }
 
         else {
             res.send(review);
         }
     });
}
