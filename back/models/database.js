const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "../back/sqlite/bugs.db"
})

sequelize.sync({
	// force:true
}).then( () => {
	console.log("All models were synchronized succesfully")
})

module.exports = sequelize;