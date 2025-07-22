const db= require('../utils/bookingAppoinment');
const Users= require('../models/users');

const addUser= async (req,res)=>{
    try{
        const{name,email,phoneNumber}= req.body;
       const users= Users.create({
         name: name,
         email: email,
        phoneNumber: phoneNumber
   })
   res.status(201).json(req.body)
    }catch(err){
      res.status(500).json({
        message:err.message
      })
    }
   
};

const getUsers= async(req,res)=>{
  try{
   
    const users= await Users.findAll();
    console.log(users);
    if((await users).length===0){
        res.status(404).json({message:'users not found',
            data:[]
        })
    }
    res.status(200).json(users);

  }catch(err){
     res.status(500).json({
        message: err.message
     })
  }
}

const deleteUSer= async (req,res)=>{
  try{
    const{id}= req.params;
    const userId= parseInt(id);
    const users= await Users.findByPk(userId);
    if(users.length===0){
      res.status(404).json({message:'no user found'});
    }
    await users.destroy();
    res.status(200).json('user has been deleted');
  }catch(err){
     res.status(500).json(err.message);
  }


}

module.exports= {
    addUser,
    getUsers,
    deleteUSer
}