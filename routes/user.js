var getUser = require('./../mySQL/getUser.js').getUser

//---------------------------------------------signup page call------------------------------------------------------


exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

      //var deleteUser = "DELETE `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) WHERE `id`='"+userId+"'";
      // var updateUser = "UPDATE `users` "
      var query = db.query(sql, function(err, result) {
        console.log(err,result)
         message = "Félicitations, vous avez créé(e) votre compte.";
         res.render('signup.ejs',{message: message});
      });

   } else {
      res.render('signup');
   }
};

//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session;

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;

      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";

      db.query(sql, function(err, results){
         if(results != undefined && results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/dashboard');
         }else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
       })
   } else {
      res.render('index.ejs',{message: message});
   }

};
//-----------------------------------------------dashboard page functionality----------------------------------------------

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

//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }
   var result = getUser(userId)

      res.render('profile.ejs',{data:result});
};

// FUNCTION FLECHE

//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
  if(req.method == "POST"){
    var userId = req.session.userId;
    var post  = req.body;
    var name= post.user_name;
    var pass= post.password;
    var fname= post.first_name;
    var lname= post.last_name;
    var mob= post.mob_no;

    console.log('SESSIOSN',post);

    if(userId == null){
      res.redirect("/login");
      return;
    }

    // var sql = "UPDATE `users ` SET 'first_name'=' +fname+ ','last_name'='"+lname+"','mob_no'='"+mob+"','user_name'='"+name+"','password'='"+pass+"' WHERE 'ID'='userId'";
    var sql = `UPDATE users SET first_name='${fname}',last_name='${lname}',mob_no='${mob}',user_name='${name}',password='${pass}' WHERE id=${userId}`
    //
    // (`first_name`,`last_name`,`mob_no`,`user_name`, `password`)
    //  SET ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')"
    // WHERE 'ID=UserId';
    db.query(sql, function(err, results){
      console.log(err,results)
      // res.render('profile.ejs',{data:results});
    });
  } else {
    res.render('edit_profile.ejs');
  }
};
