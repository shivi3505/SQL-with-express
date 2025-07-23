const express= require('express');
const route= express.Router();
const busBookingController= require('../controllers/busbookingController');
route.post('/users',busBookingController.addUser)
route.get('/users',busBookingController.fetchAllUsers)
route.post('/buses',busBookingController.addBuses)
route.post('/bookings',busBookingController.addBookings)
route.get('/users/:id/bookings',busBookingController.getBookingwithBus)
route.get('/buses/:id/bookings',busBookingController.getBookingsWithUser)
route.get('/buses/available/:seats',busBookingController.getAvailableSeats)
 module.exports=route;