// CONNECT NODEJS WITH MYSQL AND FETCH DATA FROM DATABASE
// const mysql = require('mysql');
// const conn = mysql.createConnection(
//     {
//         host : "localhost",
//         user : "root",
//         password : "",
//         database : "yahoobaba"
//     }
// );
// // conn.connect((err)=>{
// //         if(err){
// //             console.log("error");
// //         }else{
// //             console.log("connect");
// //         }
// //     });
// conn.query('select id, name, email from childrens', (err, result)=>{
//     console.log(result);    
// });