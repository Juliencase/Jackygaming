var updateUser = require('./../mySQL/updateUser.js').updateUser

//---------------------------------edit users details after login----------------------------------
exports.editProfile=function(req,res){
  if(req.method == "POST"){
    let infoUser = {}
    infoUser.first_name = post.first_name;
    infoUser.last_name = post.last_name;
    infoUser.user_name = post.user_name;
    infoUser.password = post.password;
    infoUser.mob_no = post.mob_no

    var userId = req.session.userId;

    console.log('SESSIOSN',post);

    if(userId == null){
      res.redirect("/login");
      return;
    }

    var result = updateUser(infoUser,id);

    res.render('profile.ejs',{data:results});

  } else {

  }
};
