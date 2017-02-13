var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.use (new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    },
    function (user, password, done) {
        var user = {
            userName: username,
            password: password
        };
        done(null, user);
    }));
};