var logUser = require('./../mySQL/logUser.js').logUser

//-----------------------------------------------login page call------------------------------------------------------

exports.login = function(req, res){
   var message = '';
   var sess = req.session;
   console.log('DEBUT LOGIN')

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;

      // console.log(name,pass)
      logUser(name,pass,function(results){
        console.log("RETOUR SQL",results);
         if(results != undefined && results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log('RETOUR REUSSITE LOGIN')
            res.redirect('/home/dashboard');
          }else{
            message = 'erreur de Login/Mot de passe';
            console.log('FIN ERREUR')
            res.render('index.ejs',{message: message});
          }
    });

   } else {
     console.log('FIN NO POST')
      res.render('index.ejs',{message: message});
   }
};
