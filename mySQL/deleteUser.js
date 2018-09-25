const sql = require('./config/connect.js').sql

exports.deleteUser = function(infoUser,id){
  sql.query('DELETE * FROM users WHERE id=?',[id],(err,result) =>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      return result
    }
  })
}
