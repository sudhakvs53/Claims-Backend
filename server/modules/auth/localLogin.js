import jwt from 'jsonwebtoken';
// import User from './userModel';
var users = require('./userModel.js');
const UserModal = require('mongoose').model('users');
import localPassport from 'passport-local';
var config = require('config');
    
const PassportLocalStrategy = localPassport.Strategy;

const User = (user) => { return {fname: user.first_name, mname: user.middle_name, lname: user.last_name, email: user.email, status: user.status}};

const passportLocalStrategy = new localPassport.Strategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    }, (req, username, password, done) => {
        const userData = {
            username: username.trim(),
            password: password.trim()
        };

        // find a user by email address
        return UserModal.findOne({ user_id: userData.username }, (err, user) => {
            if (err) { return done(err); }

            if (!user) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            // check if a hashed user's password is equal to a value saved in the database
            return user.comparePassword(userData.password, (passwordErr, isMatch) => {
                if (err) { return done(err); }

                if (!isMatch) {
                    const error = new Error('Incorrect email or password');
                    error.name = 'IncorrectCredentialsError';

                    return done(error);
                }

                const payload = {
                    sub: user._id
                };

                // create a token string
                const token = jwt.sign(payload, config.jwtSecret);
                const data = new User(user);

                return done(null, token, data);
            });
        });
    }
);

export default passportLocalStrategy;