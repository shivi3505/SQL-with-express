const express= require('express');
const mySql= require('mysql2')
const app= express();
const db= mySql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Sql@1234',
    database: 'test_db'
})
db.connect((err)=>{
    if(err){
        console.log(err);
        return ;
    }
   console.log('connectiom hass been created');
   const connectionQuery= `create table user(
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(20),
   email varchar(20)
   )`
   db.execute(connectionQuery,(err)=>{
    if(err){
        console.log(err);
        db.end();
        return;
    }
    console.log('table has been created');
   })
})
app.get('/',(req,res)=>{
    res.send(`<h1> Welecome Home</h1>`)
})

app.listen(3000,()=>{
    console.log('server is running');
})