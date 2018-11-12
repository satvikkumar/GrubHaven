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
var viewOrder = require('./controllers/vieworder')
var viewReservations = require('./controllers/viewReservations')
var viewMenu = require('./controllers/viewMenu')
var checkOTP = require('./controllers/checkOTP')
var addOrder = require('./controllers/addOrder')
var paytmPayment = require('./controllers/paytmPayment')
var manageInventory = require('./controllers/inventory')


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
    authRoutes.post('/removeOrder', viewOrder.removeOne);
    authRoutes.post('/viewReservations', viewReservations.returnAll);
    authRoutes.post('/removeReservation', viewReservations.deleteOne);
    authRoutes.post('/arrivedReservation', viewReservations.viewOne);
    authRoutes.post('/viewMenu', viewMenu.show);
    authRoutes.post('/checkOTP', checkOTP.check);
    authRoutes.post('/addOrder', addOrder.add);
    authRoutes.post('/showBill', viewOrder.billing);
    authRoutes.get('/paytm/initiatePayment', paytmPayment.initiatePayment);
    authRoutes.post('/paytm/transactionComplete', paytmPayment.transactionComplete);
    authRoutes.post('/addEmployee', employeeEdit.add);
    authRoutes.post('/removeEmp', employeeEdit.deleteOne);
    authRoutes.post('/listItems',manageInventory.list);
    authRoutes.post('/addItem', manageInventory.add);
    authRoutes.post('/removeItem', manageInventory.remove);
    authRoutes.post('/iEdit', manageInventory.edit);

    // Set up routes
    app.use('/api', authRoutes);

}