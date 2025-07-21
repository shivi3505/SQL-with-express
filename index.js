const express= require('express');
const studentDB= require('./utils/studentDatabase')
const busbookingDB= require('./utils/busBookingdb')
const studentRoute= require('./routes/studentRoute')
const busBokkingRoute= require('./routes/busBookingRote')
const studentsModel = require('./models/students')
const app= express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(`<h1> Welecome Home</h1>`)
})
app.use('/',studentRoute)
app.use('/',busBokkingRoute)
studentDB.sync({alter:true}).then(()=>{
app.listen(3000,()=>{
    console.log('server is running');
})
}

).catch((err)=>{
    console.log(err);
})
