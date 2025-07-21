const {Sequelize,DataTypes, INTEGER}= require('sequelize');
const sequelize= require('../utils/busBookingdb');

const  Buses= sequelize.define('buses',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    totalSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull: false
    }


});
module.exports= Buses;