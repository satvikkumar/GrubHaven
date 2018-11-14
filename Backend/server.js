// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var shell = require('shelljs');

var databaseConfig = require('./config/database');
var router = require('./app/routes');

// Configuration
mongoose.connect(databaseConfig.url);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
app.use(express.static('assets'))

 
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get("/", function(req, res) {
  res.send("Server Active. ")
});
app.post("/github",function(req,res)
{
         console.log("New Push");
         shell.exec("/home/ubuntu/git_pull.sh");
         });

router(app);

 



// Routes

    // create review and send back all reviews after creation
    // app.post('/api/reviews', function(req, res) {
 
    //     console.log("creating review");
 
    //     // create a review, information comes from request from Ionic
    //     Review.create({
    //         title : req.body.title,
    //         description : req.body.description,
    //         rating: req.body.rating,
    //         done : false
    //     }, function(err, review) {
    //         if (err)
    //             res.send(err);
 
    //         // get and return all the reviews after you create another
    //         Review.find(function(err, reviews) {
    //             if (err)
    //                 res.send(err)
    //             res.json(reviews);
    //         });
    //     });
 
    // });
 
      // delete a review
  //  app.delete('/api/reviews/:review_id', function(req, res) {
  //      Review.remove({
  //          _id : req.params.review_id
  //      }, function(err, review) {

  //      });
  // });
 
 



// listen (start app with node vanilla_node.js) ======================================
app.listen(8080);
console.log("Checking Webhook")
console.log("App listening on port 8080");

