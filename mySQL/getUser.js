const sql = require('./config/connect.js').sql

exports.getUser = function(id_user,callback){
  sql.query('SELECT * FROM users WHERE id=?',[id_user],function(err,result) {
    if(err){
      console.log(err)
    }else{
      callback(result)
    }
  })
}
