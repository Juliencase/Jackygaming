
var express = require('express');
var app = express();
var mysql = require('mysql');

var config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Megalithe1234",
  database: "user"
});


config.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  config.query("SELECT * FROM user ORDER BY pseudo", function (err, result, fields) {
    if (err) throw err;
    return(result);
  });

  var server = app.listen(3000, function () {
      console.log('Server is running..');
    }
)});
