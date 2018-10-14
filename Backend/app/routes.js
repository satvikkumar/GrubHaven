var AuthenticationController = require('./controllers/authentication');
var express = require('express');
var passportService = require('../config/passport');
var passport = require('passport');
var Listing=require('./controllers/Listing')

var requireAuth = passport.authenticate('jwt', {
        session: false
    }),
    requireLogin = passport.authenticate('local', {
        session: false
    });

module.exports = function (app) {

    var apiRoutes = express.Router(),
        authRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
    authRoutes.get('/list',requireLogin,Listing.list)
    


    // Set up routes
    app.use('/api', apiRoutes);

}