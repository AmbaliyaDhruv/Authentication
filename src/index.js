const express=require("express");
const User=require("../src/model/user.model");

const app=express();
const port=process.env.PORT || 5000

const connect=require("./config/db")
const cros=require("cors");

const {Register,login}=require("./controller/user.controller");

app.use(express.json());

app.use(express.urlencoded({
    extended: true
  }))
  

app.use(express.static("public"))
app.use(cros({
    origin:"http://127.0.0.1:5500"
}))


app.set("view engine","ejs");

app.post("/Register",Register);

app.post("/login",login);

app.get("/",async(req,res)=>{
  try {
      let user=await User.find().lean().exec();

      return res.send(user);
  } catch (error) {
    res.send(error.message)
  }
})

// aditiya google auth
var session = require('express-session')
require('./auth');
const passport = require('passport');


function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());



app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }
  ));

app.get('/auth/google/callback',
  passport.authenticate('google', {
      successRedirect: 'http://127.0.0.1:5500/views/landingPage/index.html',
      failureRedirect: '/auth/google/failure'
  })
);



app.get('http://127.0.0.1:5500/views/landingPage/index.html', isLoggedIn, (req, res) => {
  res.send(`<h1>${req.user.displayName}</h1>`)
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});




// ------------------------------------



app.listen(port,async()=>{
  try {
      await connect();
  } catch (error) {
      console.log(error.message)
  }
    
    console.log(`http://localhost:${port}`)
})