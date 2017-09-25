var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true, index: true },
    phone: Number,
    datetime: Date,
    geoip: Array,
    password: String,
    provider: String,
    isActivated: Boolean,
    providerId: String,
    // providerData: {},

});

UserSchema.pre('save',
    function(next) {
        if (this.password) {
            var md5 = crypto.createHash('md5');
            this.password = md5.update(this.password).digest('hex');
        }

        next();
    }
);

// UserSchema.methods.authenticate = function(password) {
//     var md5 = crypto.createHash('md5');
//     md5 = md5.update(password).digest('hex');

//     return this.password === md5;
// };

mongoose.model('User', UserSchema);