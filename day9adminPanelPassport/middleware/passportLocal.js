const passport = require("passport");
const UserModel = require("../models/UserModel");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "userName",
    },
    async function (userName, password, done) {
      console.log(userName, password, "passport");
      try {
        let getData = await UserModel.findOne({ userName });

        if (getData.password == password) {
          return done(null, getData);
        } else {
          return done(null, false);
        }
      } catch (e) {
        console.log(e);
        return done(null, false);
      }
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  let user = await UserModel.findById(id);
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

passport.auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

passport.setUser = (req, res, next) => {
  res.locals.user = req.user;
  next();
};

module.exports = passport;
