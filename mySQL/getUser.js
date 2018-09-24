const sql = require('./config/connect.js').sql

exports.getUser = function(id_user){
  sql.query('SELECT * FROM user WHERE id=?',[id_user],(err,result) =>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      return result
    }
  })
}
