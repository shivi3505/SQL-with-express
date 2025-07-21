const {Sequelize,DataTypes, INTEGER}= require('sequelize');
const sequelize= require('../utils/busBookingdb');

const Bookings= sequelize.define('bookings',{
    id:{
        DataTypes:INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    seatNumber:{
        DataTypes:INTEGER,
        allowNull:false
    }
})
module.exports= Bookings;