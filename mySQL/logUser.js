const sql = require('./config/connect.js').sql

exports.logUser = function(name,pass){
  sql.query('SELECT * FROM users WHERE id=?',[name,pass],(err,result) =>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
      return result
    }
  })
}
