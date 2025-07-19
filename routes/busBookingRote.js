const express= require('express');
const route= express.Router();
const busBookingController= require('../controllers/busbookingController');
route.post('/users',busBookingController.addUser)
route.get('/users',busBookingController.fetchAllUsers)
route.post('/buses',busBookingController.addBuses)
route.get('/buses/available/:seats',busBookingController.getAvailableSeats)
 module.exports=route;