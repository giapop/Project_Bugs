const User = require("../models/user");
const {restore}=require("../models/bug");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");


const createBug= async (req,res) => {
	try {
      
		const newBug = await Bug.create(req.body);
		return res.status(200).json(newBug);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllBugs = async (req,res) => {
	try{
		const bugs = await Bug.findAll();
		res.status(200).json(bugs);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const  updateStatus= async (req,res) => {
	try {
      
		const bug = await Bug.findByPk(req.params.bugId);
		if(bug==null){
			return res.status(404).send({message: "Not found bug"});
		}

		if(bug.status!="in progress"){
			return res.status(404).send({message: "Cannot rezolve this bug"});
	
		}
		bug.status="finished";
		bug.commit=req.body.commit;

		await bug.save();
		return res.status(200).json(bug);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const  listBugs= async (req,res) => {
	try {
      if(req.body.userId!=null){
		const user=await User.findByPk(req.body.userId);
		if(user==null){
			return res.status(404).send({message: "User not found"});
		}
	
		const projects = ProjectUser.findAll({
			where: {
				userId: req.body.userId
			},
			attributes: ['id'],
			raw: true
		})
		const bugs = Bug.findAll({
			where: {
				projectId: {in: projects}
			}
		})
		
		return res.status(200).json(bugs);
	  }
	if(req.body.projectId!=null){
		const project=await Project.findByPk(req.body.projectId);
		if(project==null)
		{
			return res.status(404).send({message: "Project not found"});
	
		}
		return await Bug.findAll({
            where: {projectId: req.body.projectId}
        });
	}
	return await Bug.findAll();
	}
	catch(err){
		return res.status(500).json(err);
	}
};

module.exports={
    createBug,
    getAllBugs,
	updateStatus,
	listBugs
 
};