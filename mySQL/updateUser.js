const sql = require('./config/connect.js').sql

exports.updateUser = function(infoUser,id,callback){
  sql.query('UPDATE users SET ? WHERE id=?',[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      console.log(result)
      callback(result)
    }
  })
}
