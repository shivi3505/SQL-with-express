const {Sequelize,DataTypes} = require('sequelize');
const sequelize= require('../utils/studentDatabase');

const identityCard= sequelize.define('identityCard',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    cardNo:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    }
})
module.exports= identityCard;