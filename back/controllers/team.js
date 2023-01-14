const User = require("../models/user");
const {restore}=require("../models/team");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");


const createTeam = async (req,res) => {
	try {
      
		const newTeam = await Team.create(req.body);
		return res.status(200).json(newTeam);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllTeams = async (req,res) => {
	try{
		const teams = await Team.findAll();
		res.status(200).json(teams);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const  createProjectToTeam= async (req,res) => {
	try {
      
		const team = await Team.findByPk(req.params.teamId);
		if(team){
			//const project=new Project(req.body);
			const project=new Project();
			project.name=req.body.name;
			project.repository=req.body.repository;
			project.teamId=team.id;
			await project.save();
			return res.status(200).json(project);
		}else
		return res.status(404).send({message: "Not found team"});
	}
	catch(err){
		return res.status(500).json(err);
	}
};


module.exports={

    createTeam,
    getAllTeams,
	createProjectToTeam
	
};