var express = require('express');
var router = express.Router();
var user = require('./user')


router.get('/dashboard', user.dashboard);//call for dashboard page after login

router.get('/logout', user.logout);//call for logout

router.get('/profile',user.profile);//to render users profile

router.get('/profile/edit_profile',user.editprofile);//call for edit profil page

router.post('/profile/edit_profile',user.editprofile);

module.exports = router
