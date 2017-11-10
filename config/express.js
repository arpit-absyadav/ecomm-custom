var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs');
// opn = require('opn');

// opens the url in the default browser 
// opn('http://localhost:1111');

// specify the app to open in 
// opn('http://localhost:1111', { app: 'chrome' });

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());


    app.use(express.static('./app'))
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));
    app.use('/bower_components', express.static('./bower_components'));
    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        res.sendfile('./app/views/index.html');
    });


    // user Routes
    require('../app/routes/user.server.routes.js')(app);



    return app;
};