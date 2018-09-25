const sql = require('./config/connect.js').sql

exports.addUser = function(infoUser,callback){


  sql.query('INSERT INTO users SET ? ',infoUser,function(err,results) {
    if(err){
      console.log(err)
    }else{
      callback(results)
    }
  })
}
