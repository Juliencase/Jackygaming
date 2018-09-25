const sql = require('./config/connect.js').sql

exports.addUser = function(user_name,id,callback){

  sql.query('INSERT INTO * FROM user WHERE id=?',[id_user],function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
