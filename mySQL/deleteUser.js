const sql = require('./config/connect.js').sql

exports.deleteUser = function(infoUser,id,callback){
  sql.query('DELETE * FROM users WHERE id=?',[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      console.log(result)
      callback(result)
    }
  })
}
