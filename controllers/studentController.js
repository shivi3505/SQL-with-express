const db= require('../utils/studentDatabase')
const addStudentData =  (req,res)=>{
const {name,email,age}=req.body;
const insertQuery= `INSERT INTO Student(name,email,age) VALUES (?,?,?)`;
db.execute(insertQuery,[name,email,age],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).json({message:err.message});
       // db.end();
        return;
    }
    if(!name&&!email&&!age){
console.log('name,email and age required');
 return res.status(400).json({message:'name,email and age required'})
    }
    console.log('value has been added')
res.status(201).json({message:`student with ${name} successfully addede`,data:req.body})
    //res.json(req.body);
})
}
const getStudentList = (req,res)=>{
const selectQuery=`SELECT * FROM Student`;
if(selectQuery){
db.execute(selectQuery,(err,data)=>{
    if(err){
        console.log(err.message);
        res.status(500).json({message:err.message});
        db.end();
        return;
    }
    console.log('student data has been fetched')
    //console.log(selectQuery);
    res.status(200).json({message:'student data has been fetched',data});
    //res.json(req.body);
})
}
}
const getStudentByID=(req,res)=>{
const {id} = req.params;
const getStudentByIDQuery= `SELECT * FROM Student WHERE id=?`;
if(getStudentByIDQuery){
    db.execute(getStudentByIDQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).json({message:err.message})
            return;
        }
        console.log(result);
        if(result.length===0){
           console.log(`student not found with this id ${id}`);
         return  res.status(404).json({message:`student not found`});

        }
        console.log(`fetching student with id ${id}`);
        res.status(200).json({message:`student has been fetched `,data:result})
    })

}
}
const updateStudent= (req,res)=>{
const {id}= req.params;
const {name,email,age}= req.body;
const updateQuery= `UPDATE Student SET name=?,email=?,age=? WHERE id=?`;
db.execute(updateQuery,[name,email,age,id],(err,result)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
    }
    if(result.affectedRows===0){
        console.log('student not found');
        res.status(404).json(`student not found with this id ${id}`)
        return;
    }
    console.log(`data has been updated with student id ${id}`);
    res.status(200).json({message:`data has been updated with student id ${id}`,data:req.body});
 
})
}
const deleteSudent= (req,res)=>{
const {id}= req.params;
const deleteQuery= `DELETE FROM Student WHERE id=?`;
db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
        console.log(err.message);
      return   res.status(404).send(err.message);
       
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Student not found with id ${id}` });
    }
    console.log('student has been deleted');
    res.status(200).json({message:`student with id ${id} has been deleted`})
})
}
module.exports= {
    addStudentData,
    getStudentList,
    getStudentByID,
    updateStudent,
    deleteSudent
};