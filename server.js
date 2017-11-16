process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose(),
    app = express();

app.listen(config.port);
console.log('server running at http://localhost:' + config.port);
console.log("Running date>>> " + new Date());
console.log("this is commit from vs code");
module.exports = app;