const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const User=sequelize.define("users",{
     email:DataTypes.STRING,
     password:DataTypes.STRING,
     firstName: DataTypes.STRING,
     lastName: DataTypes.STRING,
     token: DataTypes.STRING

})

module.exports=User;