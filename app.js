/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , routeHome = require('./routes/home.js')
  , signup = require('./lib/signup.js')
  , login = require('./lib/login.js')
  , dashboard = require('./lib/dashboard.js')
  , logout = require('./lib/logout.js')
  , editProfile = require('./lib/editProfile.js')
  , profile = require('./lib/profile.js')

var session = require('express-session')
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");


// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: true,
              saveUninitialized: true,
              cookie: { maxAge: 30*24*60*60*1000 }
            }));

// development only

app.get('/', routes.index);//call for main index page
app.get('/signup', signup.signup);//call for signup page
app.post('/signup', signup.signup);//call for signup post
app.get('/login', routes.index);//call for login page
app.post('/login', login.login);//call for login post
app.use('/home',routeHome)
//Middleware

app.listen(8080, function(){
  console.log("Lancement port 8080")
})
