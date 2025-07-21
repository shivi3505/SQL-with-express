const db= require('../utils/busBookingdb');
const Users= require('../models/users');
const Buses = require('../models/buses');
const { Sequelize } = require('sequelize');
const addUser= async (req,res)=>{
    try{
        const {name,email}= req.body;
        const users= await Users.create({
         name: name,
          email: email
})
   res.status(201).json({
    message:`bus has been added`,
    data: req.body
   })
    }catch(err){
      console.log(err.message);
      res.status(500).json({message:err.message})
    }


// const insertQuery= `INSERT INTO users(name,email) VALUES(?,?)`;
// db.execute(insertQuery,[name,email],(err)=>{
//     if(err){
//         console.log(err.message);
//         return res.status(500).json({message:err.message});
//     }
//     if(!name && !email){
//         console.log('name and email required')
//         res.status(400).json({message:'name and email required'});
//     }
//     console.log('user has been added');
//     res.status(201).json({ 
//         message:'new user added',
//         data:req.body
//     })
// })
}
const fetchAllUsers=async (req,res)=>{
    try{
    const users= await Users.findAll();
    if(users===null){
        res.status(404).json({
            message:`user not found`,
            data: users
        })
    }
    res.status(200).json({
        message:`all user has been fetched`,
        data: users
    })
    }catch(err){
        console.log(err.message);
       res.status(500).send(err.message);
    }
// const selectQuery= `SELECT * FROM users`;
// db.execute(selectQuery,(err,result)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).json({message:err.message});
//     }
//     console.log('fetching all users');
//     res.status(200).json(
//         {
//         message:'all user has been fetched',
//         data:result
//     })
// })
}
const addBuses= async (req,res)=>{
    try{
        const {busNumber,totalSeats,availableSeats}= req.body;
        const buses= await Buses.create({
            busNumber: busNumber,
            totalSeats: totalSeats,
            availableSeats:availableSeats
        })
         res.status(201).json({
            message:'bus has been created',
            data: req.body
         })
        
    }catch(err){
       res.status(500).json({message:err.message}) 
    }

// const insertBusQuery= `INSERT INTO buses(busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;
// db.execute(insertBusQuery,[busNumber,totalSeats,availableSeats],(err)=>{
//     if(err){
//         console.log(err.message);
//        return res.status(500).json({message:err.message});
//     }
//     if(!busNumber && !totalSeats && !availableSeats){
//         console.log('busnumber, totalseats, availableseats are required');
//        return res.status(400).json({message:'busNumber,totalSeats,availableSeats are required'});
        
//     }
//     console.log('bus has been added');
//     res.status(201).json({
//         message: 'new bus has been added',
//         data: req.body
//     })
//})
}
const getAvailableSeats= async (req,res)=>{
    try{
        const {seat} = (req.params);
        const seats= await Buses.findAll({
            where:{
                availableSeats:{
                    [Sequelize.gt]: seat
                }
            }
        })
        if(seats.length===0){
            res.status(404).send(`seats not found`);
        }
        res.status(200).json({
            message:`fetching availableseats greater then ${seat}`,
            data: seats
        })
    }catch(err){
        res.status(500).send(err.message);
    }

// const getSeatsQuery=`SELECT * FROM buses WHERE availableSeats> ${seat}`;
// if(err){
//         console.log(err.message);
//        return res.status(500).json({message:err.message});
//     }
//     console.log(`fetching availableseats greater then ${seat}`);
//     res.status(200).json({
//         message:`fetching availableseats greater then ${seat}`,
//         data: result
//     })
// })
}
module.exports={
    addUser,
    fetchAllUsers,
    addBuses,
    getAvailableSeats
}