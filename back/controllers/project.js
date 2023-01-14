const User = require("../models/user");
const {restore}=require("../models/project");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");

const getAllProjects = async (req,res) => {
	try{
		const projects = await Project.findAll();
		res.status(200).json(projects);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const  addBugToProject= async (req,res) => {
	try {
      
		const project = await Project.findByPk(req.params.projectId);
		if(project){
			
			const bug=new Bug();
			bug.severity=req.body.severity;
			bug.priority=req.body.priority;
            bug.description=req.body.description;
            bug.commit=req.body.commit;
            bug.status=req.body.status;

			bug.projectId=project.id;

			await bug.save();
			return res.status(200).json(bug);
		}else
		return res.status(404).send({message: "Not found project"});
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const deleteProject=async (req,res) => {
	try{
		Project.findOne({
            where:{
                id:req.params.projectId
            }
        }).then(element=>{
            if(element!=null)
               element.destroy();
               else
               {
                throw Error("This project does not exist");
               }
        })
        res.status(200).send({message:"Deleted project"});
	}
	catch(err){
		res.status(500).json(err);
	}
}

const createProject = async (req,res) => {
	try {
      
		const newProject = await Project.create(req.body);
		return res.status(200).json(newProject);
	}
	catch(err){
		return res.status(500).json(err);
	}
};


const getProjects = async (req,res) => {
	try {
        if(req.params.teamId==null){
			const projects = await Project.findAll();
		    res.status(200).json(projects);
		}
		const team=await Team.findByPk(req.params.teamId);
		if(team==null){
			return res.status(404).send({message: "Not found team"});
		}

		const projects= await Project.findAll({
            where: {teamId: team.id}
        });
		res.status(200).json(projects);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const  addUserToProject= async (req,res) => {
	try {
      
		const project = await Project.findByPk(req.params.projectId);
		if(project){
			
			const teamusers = await TeamUser.findAll({
				where:{
					teamId: project.teamId
				}
			});
			const users = []
			teamusers.forEach(teamUser => {
				users.push(teamUser.userId)
			})
             console.log(users);
			if(users.includes(parseInt(req.params.userId))){
				return res.status(404).send({message: "This user is  in the project"});

			}

		const projectUser=ProjectUser.create({
				isTester:false,
				projectId:project.id,
				userId:req.params.userId
			})
			 return res.status(200).json(projectUser);
		}else
		return res.status(404).send({message: "Not found project"});
	}
	catch(err){
		return res.status(500).json(err);
	}
};

module.exports={

    addBugToProject,
    getAllProjects,
	createProject,
	deleteProject,
	getProjects,
	addUserToProject
};