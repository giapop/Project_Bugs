// const express = require('express')
// const app = express();

// const sequelize = require("./models/index").sequelize;
// const indexRouter = require("./routes/index");

let port = 8080; //8080, 5000

// app.use(express.json());

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const sequelize = require("./models/index").sequelize;
require("./models/bug");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", indexRouter)

app.listen( port, async () => {
	console.log(`Server started on http://localhost:${port}`);
	try{
		await sequelize.authenticate();
        console.log("Connection has been established !!!");
	}
	catch(err){
		console.error("Unable to connect ", err)
	}

});
