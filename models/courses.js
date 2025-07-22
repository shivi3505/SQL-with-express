const {Sequelize,DataTypes} = require('sequelize');
const sequelize= require('../utils/studentDatabase');

const courses= sequelize.define('courses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports= courses;