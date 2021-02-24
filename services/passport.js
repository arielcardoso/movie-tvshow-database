const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

//require api keys
const keys = require('../config/keys');
const User = mongoose.model('User');

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null,user);
        })
        .catch(err => console.error(err))
});

//creates a new instance of google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/api/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser){
        return done(null, existingUser);
    }

    let providerData = profile._json;

    const user = await new User({
        googleId: profile.id, 
        name: providerData.name,
        email: providerData.email, 
        avatar: providerData.picture,
        locale: providerData.locale
    }).save();

    done(null, user);
}));