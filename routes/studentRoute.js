const express= require('express');
const studentController = require('../controllers/studentController')
const route = express.Router();

route.post('/students',studentController.addStudentData);
route.get('/students',studentController.getStudentList);
route.get('/students/:id',studentController.getStudentByID)
route.put('/students/:id',studentController.updateStudent);
route.delete('/students/:id',studentController.deleteSudent)
module.exports= route;
