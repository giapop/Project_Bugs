const User = require("../models/user");
const {restore}=require("../models/projectuser");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");

const createProjectUser = async (req,res) => {
	try {
   
		const newProjectUser = await ProjectUser.create(req.body);
		return res.status(200).json(newProjectUser);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllProjectUsers = async (req,res) => {
	try{
		const projectusers = await ProjectUser.findAll();
		res.status(200).json(projectusers);
	}
	catch(err){
		res.status(500).json(err);
	}
}


module.exports={
createProjectUser,
getAllProjectUsers

};