const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Bug =sequelize.define("bugs",{
    severity: DataTypes.STRING,
    priority: DataTypes.STRING,
    description: DataTypes.STRING,
    commit: DataTypes.STRING,
    status: DataTypes.STRING

})

module.exports=Bug;