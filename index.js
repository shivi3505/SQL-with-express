const express= require('express');
const db= require('./utils/studentDatabase')
const studentRoute= require('./routes/studentRoute')
const app= express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(`<h1> Welecome Home</h1>`)
})
app.use('/students',studentRoute)
app.listen(3000,()=>{
    console.log('server is running');
})