const express= require('express');
const route= express.Router();
const bookAppoinmentController= require('../controllers/bookAppoinmentController');

route.post('/users',bookAppoinmentController.addUser);
route.get('/users',bookAppoinmentController.getUsers);
route.delete('/users/:id',bookAppoinmentController.deleteUSer);

module.exports= route;