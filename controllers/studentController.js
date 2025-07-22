const db= require('../utils/studentDatabase');
const Student= require('../models/students');
const IdentityCard= require('../models/identityCard');
const Department= require('../models/department')
const addStudentData = async (req,res)=>{
    try{
        const {name,email,age}=req.body;
       const student = Student.create({
       name:name,
       email:email,
       age: age
        })
        res.status(201).json({
            message:`student added successfully`,
            data: req.body
        })
      }catch(err){
       console.log(err);
       res.status(500).json({message:err.message})
}

// const {name,email,age}=req.body;
// const insertQuery= `INSERT INTO Student(name,email,age) VALUES (?,?,?)`;
// db.execute(insertQuery,[name,email,age],(err)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).json({message:err.message});
//        // db.end();
//         return;
//     }
//     if(!name&&!email&&!age){
// console.log('name,email and age required');
//  return res.status(400).json({message:'name,email and age required'})
//     }
//     console.log('value has been added')
// res.status(201).json({message:`student with ${name} successfully addede`,data:req.body})
//     //res.json(req.body);
// })
}

const addValuesTOStudentAndIdentityCard= async (req,res)=>{
    try{
        const student= await Student.create(req.body.student);
    const identityCard= await IdentityCard.create({
        ...req.body.identityCard,
        StudentId: student.id
    })
    res.status(201).json({student,identityCard});
    }catch(err){
     res.status(500).json({message:err.message})
    }
    
}
const getStudentList = async (req,res)=>{
    try{ 
        const student= await Student.findAll();
        if(student.length===0){
            res.status(404).json({
                message: 'students not found',
                data: student
            })
        }
        console.log(student);
        res.status(200).json({
            message:`all student has been fetched`,
            data : student
        })
    }catch(err){
          console.log(err);
          res.status(500).json({message:err.message});
    }
    

// const selectQuery=`SELECT * FROM Student`;
// if(selectQuery){
// db.execute(selectQuery,(err,data)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).json({message:err.message});
//         db.end();
//         return;
//     }
//     console.log('student data has been fetched')
//     //console.log(selectQuery);
//     res.status(200).json({message:'student data has been fetched',data});
//     //res.json(req.body);
// })
//}
}
const getStudentByID= async (req,res)=>{
    try{
         const {id} = req.params;
         const getStudentByID= await Student.findByPk(id);
         if(getStudentByID===null){
               res.status(404).json({
                         message:`student not found with id ${id}`,
                        data: []
                  })
            }
            res.status(200).json({
                message:`staudent have been fetched`,
                data: getStudentByID
            })
    }catch(err){
          console.log(err.message);
          res.status(500).json({message:err.message})
    }

// const getStudentByIDQuery= `SELECT * FROM Student WHERE id=?`;
// if(getStudentByIDQuery){
//     db.execute(getStudentByIDQuery,[id],(err,result)=>{
//         if(err){
//             console.log(err.message);
//             res.status(500).json({message:err.message})
//             return;
//         }
//         console.log(result);
//         if(result.length===0){
//            console.log(`student not found with this id ${id}`);
//          return  res.status(404).json({message:`student not found`});

//         }
//         console.log(`fetching student with id ${id}`);
//         res.status(200).json({message:`student has been fetched `,data:result})
//     })

// }
}
const updateStudent= async (req,res)=>{
const {id}= req.params;
const {name}= req.body;
try{
   const student= await Student.findByPk(id);
   if(!student){
    res.status(404).json({message:'student not found'})
   } 
   student.name= name;
   await student.save();
   res.status(200).json({
    message:'student has been updated',
     data: req.body
    })
}catch(err){
   console.log(err.message);
   res.status(500).json({message:err.message})
}
// const updateQuery= `UPDATE Student SET name=?,email=?,age=? WHERE id=?`;
// db.execute(updateQuery,[name,email,age,id],(err,result)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).send(err.message);
//         db.end();
//         return;
//     }
//     if(result.affectedRows===0){
//         console.log('student not found');
//         res.status(404).json(`student not found with this id ${id}`)
//         return;
//     }
//     console.log(`data has been updated with student id ${id}`);
//     res.status(200).json({message:`data has been updated with student id ${id}`,data:req.body});
 
// })
}
const deleteSudent= async (req,res)=>{
const {id}= req.params;
try{
   const student= await Student.findByPk(id);
   if(!student){
    res.status(404).json({message:'student not found'})
   } 
   
   await student.destroy();
   res.status(200).json({
    message:'student has been deleted',
    })
}catch(err){
   console.log(err.message);
   res.status(500).json({message:err.message})
}
// const deleteQuery= `DELETE FROM Student WHERE id=?`;
// db.execute(deleteQuery,[id],(err,result)=>{
//     if(err){
//         console.log(err.message);
//       return   res.status(404).send(err.message);
       
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: `Student not found with id ${id}` });
//     }
//     console.log('student has been deleted');
//     res.status(200).json({message:`student with id ${id} has been deleted`})
// })
}
const addStudentWithDepartment= async(req,res)=>{
    try{
       const department= await Department.create(req.body.department);
       const student= await Student.create({
        ...req.body.student,
        departmentId: department.id
       })
       res.status(201).json({department,student})

    }catch(err){
      res.status(500).json({message:err.message})
    }
}
const getAllStudentsWithDepartment = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: {
        model: Department,
        as: 'department'
      }
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports= {
    addStudentData,
    getStudentList,
    getStudentByID,
    updateStudent,
    deleteSudent,
    addValuesTOStudentAndIdentityCard,
    addStudentWithDepartment,
    getAllStudentsWithDepartment
};