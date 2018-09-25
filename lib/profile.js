var getUser = require('./../mySQL/getUser.js').getUser

//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }
   var result = getUser(userId);

      res.render('profile.ejs',{data:result});
};
