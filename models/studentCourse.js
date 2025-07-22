const {Sequelize,DataTypes} = require('sequelize');
const sequelize= require('../utils/studentDatabase');

const studentCourse= sequelize.define('studentcourse',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    }
})
module.exports= studentCourse;