// const conn = require('./config');

// conn.query('select id, name, email from childrens', (err, result)=>{
//         console.log(result); 
// });

const express = require('express');
const conn = require('./config');
const app = express();


// 1. READ DATA THROUGH GET API
// app.get('/', (req, res)=>{
//     conn.query('select * FROM users',(err, result)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send(result);
//         }
//     });
// });


//  2. CREATE DATA  THROUGH POST API
// app.use(express.json());
// app.post('/', (req, res)=>{
//         let data = req.body;
//         conn.query('INSERT INTO users SET ?', data, (err, result, fields)=>{
//             if(err){
//                 console.log(err);
//             } else{
//                 res.send(result)
//             }
//         });
//     });


// 3.UPDATE DATE THROUGH PUT API

// app.put('/', (req, res)=>{
//     let data = ["lokesh", "lokesh@gmail.com", 4]
//     conn.query('UPDATE users SET  name = ?, email = ? WHERE id = ?', data, (err, result, feilds)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result);
//         }
//     });
// });

// DYNAMIC DATA UPDATAE
// app.use(express.json());
// app.put('/', (req, res)=>{
//     let data = [req.body.name, req.body.email, req.body.id]
//     conn.query('UPDATE users SET  name = ?, email = ? WHERE id = ?', data, (err, result, feilds)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send(result);
//         }
//     });
// });



// DELTE DATA THROUGH DELETE API

app.delete('/:id', (req, res)=>{
    conn.query('DELETE FROM users where id = '+req.params.id, (err, result, feilds)=>{
        if(err) throw err
        res.send(result)
    });
});



app.listen(4500);