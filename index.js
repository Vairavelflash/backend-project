
const sequelize = require("./utils/database");
const patient = require("./models/patient");
const doctor = require("./models/doctor");
const Patient = require("./models/patient");
// const hospitals = require("./models/hospitals");


// patient.hasMany(doctor);
doctor.belongsToMany(Patient, { through: 'doctor_patient'});


sequelize
.sync({force:true})
.then((result)=>{
    return patient.create({name:"thanos",age:70})
    
})
.then(patient=>{
    console.log("1st data",patient);
    return doctor.create({name:"tony stark",age:27});
})
.then(doctor=>{
    console.log("doctor name:",doctor);
})
.catch((err)=>{
    console.log(err);
})
