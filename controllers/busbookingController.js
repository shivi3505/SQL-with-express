const db= require('../utils/busBookingdb');
const Users= require('../models/users');
const Buses = require('../models/buses');
const { Sequelize } = require('sequelize');
const  Bookings  = require('../models/bookings');
const addUser= async (req,res)=>{
    try{
        const {name,email,phoneNumber}=req.body
        const users= await Users.create({
         name: name,
          email: email,
          phoneNumber:phoneNumber
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
const addBookings= async (req,res)=>{
    try{
    const booking= await    Bookings.create(req.body);
    res.status(201).json(booking);
    }catch(err){
        res.status(500).json({message:err.message});
    }

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
// const addUsersWithBooking= async (req,res)=>{
//     try{
//         const users=await Users.create(req.body.user);
//         const bookings=await Bookings.create({
//          ...req.body.booking,
//           userId: users.id
//           });
//      res.status(201).json({users,bookings})
//         }catch(err){
//               res.status(500).json({message:err.message})
//     }
    

// }
const getBookingwithBus=async (req,res)=>{
    try{
    const id = parseInt(req.params.id);
    const bookings=  await Bookings.findAll({
        where:{
            userId:id,
            
        },
        include:{
        model:Buses,
        attributes:['busNumber']
        }
    })
    res.status(200).json(bookings);
}catch(err){
 res.status(500).json({message:err.message})
}
}
const getBookingsWithUser= async (req,res)=>{
    try{
    const id=req.params.id;
    const bookings=await Bookings.findAll({
        where:{
            busID:id
            
        },
        include:{
        model:Users,
        attributes:['name','email','phoneNumber']
        }
    })
     res.status(200).json(bookings);
}catch(err){
 res.status(500).json({message:err.message})
}
}
module.exports={
    addUser,
    fetchAllUsers,
    addBuses,
    getAvailableSeats,
    addBookings,
    getBookingwithBus,
    getBookingsWithUser   
    
}