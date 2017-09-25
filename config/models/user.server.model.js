var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true, index: true },
    phone: Number,
    datetime: Date,
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


mongoose.model('User', UserSchema);