var addUser = require('./../mySQL/addUser.js').addUser


//---------------------------------------------signup page call------------------------------------------------------


exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
     let infoUser = {}
     infoUser.first_name = post.first_name;
     infoUser.last_name = post.last_name;
     infoUser.user_name = post.user_name;
     infoUser.password = post.password;
     infoUser.mob_no = post.mob_no;

     var userId = req.session.userId;

     var result = getUser(userId);


      var query = db.query(sql, function(err, result) {
        console.log(err,result)
         message = "Félicitations, vous avez créé(e) votre compte.";
         res.render('index.ejs',{message: message});
      });

   } else {
      res.render('signup.ejs');
   }
};
