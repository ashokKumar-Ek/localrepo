const mysql = require('mysql');
const conn = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "",
        database : "codestepbystep"
    }
);
module.exports = conn;