const db= require('../utils/studentDatabase')
const addStudentData =  (req,res)=>{
const {name,email}=req.body;
const insertQuery= `INSERT INTO Students(name,email) VALUES (?,?)`;
db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
       // db.end();
        return;
    }
    console.log('value has been added')
    res.status(201).send(`student with ${name} successfully addede`)
    //res.json(req.body);
})
}
const getStudentList = (req,res)=>{
const selectQuery=`SELECT * FROM Students`;
db.execute(selectQuery,(err,data)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
    }
    console.log('student data has been fetched')
    console.log(selectQuery);
    res.status(200).json(data);
    //res.json(req.body);
})

}
const updateStudent= (req,res)=>{
const {id}= req.params;
const {name}= req.body;
const updateQuery= `UPDATE Students SET name=? WHERE id=?`;
db.execute(updateQuery,[name,id],(err,result)=>{
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
    res.status(200).json({message:`data has been updated with student id ${id}`});
 
})
}
const deleteSudent= (req,res)=>{
const {id}= req.params;
const deleteQuery= `DELETE FROM Students WHERE id=?`;
db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
        console.log(err.message);
      return   res.status(404).send(err.message);
       
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Student not found with id ${id}` });
    }
    console.log('student has been deleted');
    res.status(204).json(`student with id ${id} has been deleted`)
})
}
module.exports= {
    addStudentData,
    getStudentList,
    updateStudent,
    deleteSudent
};