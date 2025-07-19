const express= require('express');
const mySql= require('mysql2')
const app= express();
const db= mySql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Sql@1234',
    database: 'Bus_booking'
   
})
db.connect((err)=>{
    if(err){
        console.log(err);
        return ;
    }
   console.log('connectiom hass been created');
 const queries = [
  `CREATE TABLE IF NOT EXISTS Users(
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(20),
   email VARCHAR(20)
  )`,
  `CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
  )`,

  `CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
  )`,

  `CREATE TABLE IF NOT EXISTS Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(20)
  )`
];

for (const query of queries) {
  db.execute(query, (err) => {
    if (err) throw err;
    console.log('table has been created')
  }
);
}

//    db.execute(connectionQuery,(err)=>{
//     if(err){
//         console.log(err);
//         db.end();
//         return;
//     }
//     console.log('table has been created');
//    })
})
app.get('/',(req,res)=>{
    res.send(`<h1> Welecome Home</h1>`)
})

app.listen(3000,()=>{
    console.log('server is running');
})