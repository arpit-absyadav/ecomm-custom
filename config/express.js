var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser=require('body-parser');
var fs = require('fs');
module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    // app.set('views', './app/views');
    // app.set('view engine', 'ejs');
   // app.get('/', function(req, res) {
     //   res.sendfile('./app/views/index.html');
   // });

    //app.get('/admin', function(req, res) {
        //res.sendfile('./adminapp/admin_views/index.html');
    //});


   

    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));
    app.use('/bower_components', express.static('./bower_components'));
    app.use(express.static('./app'))


    app.use('/bower_components',  express.static(__dirname + '/bower_components'));
    app.use('/js',  express.static(__dirname + '/public/js'));
    app.use('/css',  express.static(__dirname + '/public/css'));
    app.use('/images',  express.static(__dirname + '/public/assets/images'));
    app.use(express.static(__dirname + '/public	'));
    app.use(bodyParser.json());

	app.get('/', function (req, res) {
	  res.sendFile(__dirname+'/public/index.html')
	})



    return app;
};


