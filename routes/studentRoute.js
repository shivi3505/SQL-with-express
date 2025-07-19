const express= require('express');
const studentController = require('../controllers/studentController')
const route = express.Router();

route.post('/add',studentController.addStudentData);
route.get('/',studentController.getStudentList);
route.put('/update/:id',studentController.updateStudent);
route.delete('/:id',studentController.deleteSudent)
module.exports= route;
