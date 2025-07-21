const {Sequelize} = require('sequelize');
const sequelize= new Sequelize('bus_booking','root','Sql@1234',{
    host:'localhost',
    dialect: 'mysql'
    
});

(async ()=>{
    try{
       await  sequelize.authenticate();
        console.log('connection has been created');
    }catch(err){
       console.log(err);
    }
    

})();
module.exports= sequelize;
// const mySql = require('mysql2');
// const db = mySql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Sql@1234',
//     database:'bus_booking'
// })
// db.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('connection has been created');
// })
// module.exports= db;
