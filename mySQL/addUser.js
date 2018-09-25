const sql = require('./config/connect.js').sql

exports.addUser = function(user_name){
  sql.query('INSERT INTO * FROM user WHERE id=?',[id_user],(err,result) =>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      return result
    }
  })
}
