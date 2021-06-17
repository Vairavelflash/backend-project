const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../utils/database");

const Patient = sequelize.define("patient",{
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

module.exports = Patient;