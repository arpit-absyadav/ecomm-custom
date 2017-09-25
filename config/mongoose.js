var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, {
        promiseLibrary: global.Promise
    });

  // require models
	require('./models/user.server.model');


    return db;
};