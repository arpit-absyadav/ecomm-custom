var express = require('express');
var mongoose = require('mongoose');
var bodyParser=require('body-parser');
var fs = require('fs');

var app = express()
    app.set("view options", {layout: false});

    app.use('/bower_components',  express.static(__dirname + '/bower_components'));
    app.use('/js',  express.static(__dirname + '/public/js'));
    app.use('/css',  express.static(__dirname + '/public/css'));
    app.use('/images',  express.static(__dirname + '/public/assets/images'));
    app.use(express.static(__dirname + '/public	'));
    app.use(bodyParser.json());

	app.get('/', function (req, res) {
	  res.sendFile(__dirname+'/public/index.html')
	})

	
	app.listen(process.env.PORT||1111, function(){
 	 console.log(' [App is Live] : listening on port 1111!');
	});


//------------------- Database Connectivity---------------------------------//

var URI = 'mongodb://127.0.0.1:27017/sangrah';
var db = mongoose.connect(URI);

mongoose.connection.once('connected', function() {
	console.log(" [MongoDB]:: Connection Established")
});

// ----------------Crud handling-----------------------------------------//
var reg = require('./crud/registration');


app.use('/registration', reg);