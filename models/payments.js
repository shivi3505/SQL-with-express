const {Sequelize,DataTypes, INTEGER, STRING}= require('sequelize');
const sequelize= require('../utils/busBookingdb');

const Payments= sequelize.define('payments',{
    id:{
        DataTypes:INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    amountPaid:{
        DataTypes: INTEGER,
        allowNull:false
    },
    paymentStatus: {
        DataTypes: STRING,
        allowNull:false
    }
});
module.exports= Payments;