const {Sequelize,DataTypes, INTEGER}= require('sequelize');
const sequelize= require('../utils/busBookingdb');

const Bookings= sequelize.define('bookings',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    seatNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})
module.exports= Bookings;