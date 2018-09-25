var mysql = require('mysql')
var param = require('./config.js')

exports.sql = mysql.createConnection(param.connection);
