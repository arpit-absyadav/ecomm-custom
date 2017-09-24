process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose(),
    app = express(),
    passport = passport();
app.set('jwtSecret', config.jwt_secret);
app.listen(config.port);
console.log("Server is Running >>> " + new Date());

module.exports = app;
// console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);



