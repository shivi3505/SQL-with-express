const db= require('../utils/busBookingdb')
const addUser= (req,res)=>{
const {name,email}= req.body;
const insertQuery= `INSERT INTO users(name,email) VALUES(?,?)`;
db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        return res.status(500).json({message:err.message});
    }
    if(!name && !email){
        console.log('name and email required')
        res.status(400).json({message:'name and email required'});
    }
    console.log('user has been added');
    res.status(201).json({ 
        message:'new user added',
        data:req.body
    })
})
}
const fetchAllUsers=(req,res)=>{
const selectQuery= `SELECT * FROM users`;
db.execute(selectQuery,(err,result)=>{
    if(err){
        console.log(err.message);
        res.status(500).json({message:err.message});
    }
    console.log('fetching all users');
    res.status(200).json(
        {
        message:'all user has been fetched',
        data:result
    })
})
}
const addBuses= (req,res)=>{
const {busNumber,totalSeats,availableSeats}= req.body;
const insertBusQuery= `INSERT INTO buses(busNumber,totalSeats,availableSeats) VALUES (?,?,?)`;
db.execute(insertBusQuery,[busNumber,totalSeats,availableSeats],(err)=>{
    if(err){
        console.log(err.message);
       return res.status(500).json({message:err.message});
    }
    if(!busNumber && !totalSeats && !availableSeats){
        console.log('busnumber, totalseats, availableseats are required');
       return res.status(400).json({message:'busNumber,totalSeats,availableSeats are required'});
        
    }
    console.log('bus has been added');
    res.status(201).json({
        message: 'new bus has been added',
        data: req.body
    })
})
}
const getAvailableSeats= (req,res)=>{
const {seat} = req.params;
const getSeatsQuery=`SELECT * FROM buses WHERE availableSeats> ${seat}`;
db.execute(getSeatsQuery,(err,result)=>{
if(err){
        console.log(err.message);
       return res.status(500).json({message:err.message});
    }
    console.log(`fetching availableseats greater then ${seat}`);
    res.status(200).json({
        message:`fetching availableseats greater then ${seat}`,
        data: result
    })
})
}
module.exports={
    addUser,
    fetchAllUsers,
    addBuses,
    getAvailableSeats
}