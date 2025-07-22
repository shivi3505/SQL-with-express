const Courses= require('../models/courses');
const Students= require('../models/students');
const addCourse= async (req,res)=>{
    try{
         const {name}= req.body;
         const courses= await Courses.create({"name":name});
         res.status(201).json(courses)
    }catch(err){
    res.status(500).json({message: err.message})
    }
}
const addStudentToCourse= async (req,res)=>{
try{
      const {studentId,courseId}= req.body;
      const student= await Students.findByPk(studentId);
      const course=  await Courses.findAll({
        where:{
            id: courseId
        }
      })
      await student.addCourse(course);
      const updatedStudent= await Students.findByPk(studentId,{include:Courses});
      res.status(201).json(updatedStudent);

}catch(err){
   res.status(500).json({message:err.message})
}
}
module.exports= {
    addCourse,
    addStudentToCourse
}