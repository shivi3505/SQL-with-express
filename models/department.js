const {Sequelize,DataTypes} = require('sequelize');
const sequelize= require('../utils/studentDatabase');

const department= sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    departmentName:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports= department;