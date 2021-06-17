const Sequelize = require('sequelize');

const sequelize = new Sequelize("intern-db","root","password",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;