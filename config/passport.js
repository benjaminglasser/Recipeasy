const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
// passport.use <-- we use this to plug-in login options

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        // a user has logged in with OAuth...
        // does this user allready exist in our own database?
        // let's check:
        User.findOne({
            'googleId': profile.id
        }, function (err, user) {
            // if they don't, we create them
            // check for and handle errors
            if (err) return cb(err);
            if (user) {
                // if user exists in our database - log them in!    
                return cb(null, user);
            } else {
                // user doesn't exist, we create one
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(function (err) {
                    if (err) return cb(err);
                    // user saved succesfully
                    return cb(null, newUser);
                });
            }
        });
    }
));

// passport.serializeUser <-- gets called one time when the user logs in to create a session
passport.serializeUser(function(user, done) {
    done(null, user.id);
})

// passport.deserializeUser <-- gets called with each request - 
// then decodes the cookie and looks up the user in session storage and creates req.user for us

// req.user is used for us to access the users ID and limited info

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        // console.log(user);
        // localStorage.setItem('user', user._id);
        done(err, user); // create req.user
    });
})
