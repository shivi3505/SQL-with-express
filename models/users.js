const {Sequelize,DataTypes, INTEGER, STRING}= require('sequelize');
 const sequelize= require('../utils/busBookingdb');
//nst sequelize= require('../utils/bookingAppoinment')
const Users= sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    phoneNumber:{
     type:DataTypes.STRING,
     allowNull:false
    }
});
module.exports= Users;
