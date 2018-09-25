//-----------------------------------------------dashboard page functionality----------------------------------------------
var getUser = require('./../mySQL/getUser').getUser

exports.dashboard = function(req, res, next){

   var user =  req.session.user,
   userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var result = getUser(userId)
      res.render('dashboard.ejs', {user:result});
};
