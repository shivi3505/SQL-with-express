const express= require('express');
const coursesController = require('../controllers/courseController')
const route = express.Router();

route.post('/addCourse', coursesController.addCourse);
route.post('/addStudentToCourse', coursesController.addStudentToCourse)
module.exports= route;