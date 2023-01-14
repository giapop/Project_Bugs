const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Team=sequelize.define("teams",{
    name:DataTypes.STRING
})

module.exports=Team;