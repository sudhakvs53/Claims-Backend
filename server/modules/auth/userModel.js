import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
var config = require('config');

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    password: { type: String, required: false },
    first_name: {type: String, required: false },
    middle_name: {type: String, required: false },
    last_name: {type: String, required: false },
    email: {type: String, required: true },
    status: {type: String, required: true}
});

userSchema.methods.comparePassword = function comparePassword(password, callback) {
    // bcrypt.compare(password, this.password, callback);
    callback(null, password == this.password);
};
  
  
/**
  * The pre-save hook method.
  */
userSchema.pre('save', function saveHook(next) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if (!user.isModified('password')) return next();

    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) { return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if (hashError) { return next(hashError); }

            // replace a password string with hash value
            user.password = hash;

            return next();
        });
    });
});
  
module.exports = mongoose.model('users', userSchema);

// export default userModel;