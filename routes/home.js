var express = require('express');
var router = express.Router();
var dashboard = require('./../lib/dashboard.js');
var editProfile = require('./../lib/editProfile.js');
var login = require('./../lib/login.js');
var logout = require('./../lib/logout.js');
var profile = require('./../lib/profile.js');
var signup = require('./../lib/signup.js');



router.get('/dashboard', dashboard.dashboard);//call for dashboard page after login

router.get('/logout', logout.logout);//call for logout

router.get('/profile',profile.profile);//to render users profile

router.get('/profile/edit_profile',function(res,req){
    res.render('edit_profile.ejs')
  });//call for edit profil page

router.post('/profile/edit_profile',editProfile.editProfile);

module.exports = router
