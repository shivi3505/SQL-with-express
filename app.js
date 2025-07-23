const express= require('express');
const cors= require('cors');
const studentDB= require('./utils/studentDatabase')
const busbookingDB= require('./utils/busBookingdb')
const studentRoute= require('./routes/studentRoute')
const courseRoute= require('./routes/courseRoute')
const busBokkingRoute= require('./routes/busBookingRote')
const bookingAppoinmentRoute= require('./routes/bookAppoinment')
const appoinmentDB= require('./utils/bookingAppoinment')
//const studentsModel = require('./models/students')
//models
require('./models');
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send(`<h1> Welecome Home</h1>`)
})
// app.use('/',studentRoute)
app.use('/',busBokkingRoute)

busbookingDB.sync({force:true })
.then(()=>{
app.listen(3000,()=>{
    console.log('server is running');
})
}

).catch((err)=>{
    console.log(err);
})

// app.use('/',bookingAppoinmentRoute);
// appoinmentDB.sync({force:true}).
// then(()=>{
//     app.listen(3000,()=>{
//         console.log('server is running');
//     })
// }).catch((err)=>{
//      console.log(err);
// })
// app.use('/',studentRoute);
// app.use('/courses',courseRoute);
// studentDB.sync({force:true}).
// then(()=>{
//     app.listen(3000,()=>{
//         console.log('server is running');
//     })
// }).catch((err)=>{
//      console.log(err);
// })