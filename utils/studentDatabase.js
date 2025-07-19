const mySql= require('mysql2')
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
 const query = 
  `CREATE TABLE IF NOT EXISTS Students(
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(20),
   email VARCHAR(100)
  )`

// for (const query of queries) {
//   db.execute(query, (err) => {
//     if (err) throw err;
//     console.log('table has been created')
//   }
// );
// }

   db.execute(query,(err)=>{
    if(err){
        console.log(err);
        db.end();
        return;
    }
    console.log('table has been created');
   })
})
module.exports= db;