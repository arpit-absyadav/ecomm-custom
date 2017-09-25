var config = require('./config'),
    express = require('express'),
    bodyParser=require('body-parser'),
    fs = require('fs');

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


 


    return app;
};


