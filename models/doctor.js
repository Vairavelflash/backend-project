const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../utils/database");

const doctor = sequelize.define("doctor",{
id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true,
},
name:{
    type:DataTypes.STRING,
    allowNull:false
},
age:{
    type:DataTypes.INTEGER,
    allowNull:false
},
});

module.exports = doctor;