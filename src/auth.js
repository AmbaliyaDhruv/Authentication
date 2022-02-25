require("dotenv").config();




const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

let name;
passport.use(new GoogleStrategy({
  clientID:"751966511802-gmojm6qd17jt7hg5jrhkupfvi9pq5g28.apps.googleusercontent.com",
  clientSecret:"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",
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
     
      
      return done(null, profile);
    
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


