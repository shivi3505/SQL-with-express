const express= require('express');
const studentController = require('../controllers/studentController')
const route = express.Router();

route.post('/students',studentController.addStudentData);
route.get('/students',studentController.getStudentList);
route.get('/students/:id',studentController.getStudentByID)
route.put('/students/:id',studentController.updateStudent);
route.delete('/students/:id',studentController.deleteSudent);
route.post('/addngStudentWithIdCard',studentController.addValuesTOStudentAndIdentityCard);
route.post('/addStudentWithDepartment',studentController.addStudentWithDepartment)
route.get('/getAllStudentsWithDepartment',studentController.getAllStudentsWithDepartment)
module.exports= route;
