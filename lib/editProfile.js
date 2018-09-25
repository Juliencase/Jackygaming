var updateUser = require('./../mySQL/updateUser.js').updateUser

//---------------------------------edit users details after login----------------------------------
exports.editProfile=function(req,res){
  if(req.method == "POST"){
    let infoUser = {}
    let post = req.body;

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

    updateUser(infoUser,userId,function(results) {
    console.log("EDIT PROFIL");
    res.redirect('/home/profile',{data:results});
    console.log("salut t'es la ?");
    });


  } else {
    console.log("Error EDIT PROFILE");
  }
};
