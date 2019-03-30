// import dotenv package in order to mock development environment in .env file
require('dotenv').config();
const express = require('express');
// parses incoming request bodies and makes them available under `req.body`
const bodyParser = require('body-parser');
// enables Cross-Origin Resource Sharing for AJAX requests from foreign hosts
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9000;
// packages for Passport.js
const passport = require('passport');

// express middleware
app.use(bodyParser.json({
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// Passport.js middleware
app.use(passport.initialize());

// makes routes available to express app
const routes_setter = require('./controllers/routes.js');
require('./config/passport')(passport);
routes_setter(app, passport);

app.listen(PORT, function (err) {
    if (err) {
        throw new Error("Server failed to start correctly: ", err);
    }
    console.log('Server listening on port:', PORT);
});