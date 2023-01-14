const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Project=sequelize.define("projects",{
     name:DataTypes.STRING,
     repository:DataTypes.STRING
   
})

module.exports=Project;