var User = require('mongoose').model('User');


exports.create = function(req, res, next) {
    var user = new User(req.body);
    var message = null;
    var date = new Date();
    var currentDateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    user.datetime = currentDateTime;
    user.isActivated = true;
    user.provider = 'local';
    user.save(function(err, user) {
        if (err) {
            console.log(err.name || err.code);
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log(err.code, ": Email exists");
                // Duplicate user
                res.json({ success: false, message: 'email already exist!' });
            }
            // return next(err);
        } else {
            res.json({
                success: true,
                user: user.toJSON()
            });
        }
    });
};