const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const ProjectUser =sequelize.define("projectusers",{
 
    isTester:DataTypes.BOOLEAN

})

module.exports=ProjectUser;