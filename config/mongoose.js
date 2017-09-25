var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, {
        promiseLibrary: global.Promise
    });

  // require models
// require('.')


    return db;
};