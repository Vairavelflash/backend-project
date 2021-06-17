const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../utils/database");

const doctor = require("./doctor");
const patient = require("./patient");

const hospitals = sequelize.define("hospitals",{
doctorid:{
    type:DataTypes.INTEGER,
    references:{
        model: doctor,
        key:'id'
    }
},
patientid:{
    type:DataTypes.STRING,
    references:{
        model: patient,
        key:'id'
    }
},
});

module.exports = hospitals;