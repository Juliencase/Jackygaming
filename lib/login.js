var logUser = require('./../mySQL/logUser.js').logUser

//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session;

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;

    var results = logUser(name,pass);

         if(results != undefined && results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/dashboard');
         }else{
            message = 'erreur de Login/Mot de passe';
            res.render('index.ejs',{message: message});
         }

   } else {
      res.render('index.ejs',{message: message});
   }

};
