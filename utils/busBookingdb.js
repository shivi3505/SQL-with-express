const mySql = require('mysql2');
const db = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sql@1234',
    database:'bus_booking'
})
db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connection has been created');
})
module.exports= db;