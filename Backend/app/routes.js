var AuthenticationController = require('./controllers/authentication');
var express = require('express');
var passportService = require('../config/passport');
var passport = require('passport');
var listing = require('./controllers/Listing');
var searchRestaurants = require('./controllers/searchRestaurants'); 
var employeeEdit = require('./controllers/employeeEdit'); 
var viewReviews = require('./controllers/viewReviews'); 
var addReview = require('./controllers/addReview');
var viewReviewByRestaurant = require('./controllers/viewReviewByRestaurant');
var verify = require('./controllers/verify')
var checkTables = require('./controllers/viewTables')
var makeReservation = require('./controllers/makeReservation')

var requireAuth = passport.authenticate('jwt', {
    session: false
}),
requireLogin = passport.authenticate('local', {
    session: false
});

module.exports = function (app) {

    var authRoutes = express.Router();

    // Auth Routes
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
    authRoutes.post('/list',listing.list);
    authRoutes.post('/search',searchRestaurants.search);
    authRoutes.post('/employee', employeeEdit.view);
    authRoutes.post('/eedit', employeeEdit.edit );
    authRoutes.post('/viewReview', viewReviews.view );
    authRoutes.post('/addReview', addReview.add);
    authRoutes.post('/viewReviewByRestaurant', viewReviewByRestaurant.view );
    authRoutes.post('/verify', verify.authorize );
    authRoutes.post('/tables', checkTables.search);
    authRoutes.post('/makeReservation', makeReservation.add);
    authRoutes.post('/vieworder', viewOrder.view);





    // Set up routes
    app.use('/api', authRoutes);

}