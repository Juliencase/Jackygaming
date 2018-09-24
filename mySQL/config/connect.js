var mysql = require('mysql')
var param = require('./config.js')

global.db = mysql.createConnection(param.connection);
// exports.sql = mysql.createConnection(param.connection);
