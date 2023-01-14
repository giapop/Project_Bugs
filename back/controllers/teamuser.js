const User = require("../models/user");
const {restore}=require("../models/teamuser");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");

const createTeamUser = async (req,res) => {
	try {
    //     const user=await User.findByPk(req.body.userId);
	 
	//    if(user==null){
	// 	throw Error("User not found!");
	//    }

	//    const teamUser=await TeamUser.findOne({
	// 	where:{
	// 		teamId:req.body.teamId,
	// 		userId:req.body.userId
	// 	}
	//    })
	//    if(teamUser!=null){
	// 	throw Error("User found already!")
	//    }
		const newTeamUser = await TeamUser.create(req.body);
		return res.status(200).json(newTeamUser);
	}
	catch(err){
		return res.status(500).json(err);
	}
};


const getAllTeamUsers = async (req,res) => {
	try{
		const teamusers = await TeamUser.findAll();
		res.status(200).json(teamusers);
	}
	catch(err){
		res.status(500).json(err);
	}
}


//add user intr o echipa
const addNewUserToTeam = async (req,res) => {
	try{
       const user=await User.findByPk(req.body.userId);
	 
	   if(user==null){
		throw Error("User not found!");
	   }
	 
	   const teamUser=await TeamUser.findOne({
		where:{
			teamId:req.body.teamId,
			userId:req.body.userId
		}
	   })
	   if(teamUser!=null){
		//throw Error("User found already!")
		res.status(404).send({message: "This user has a team"});

	   }
	   await
	    await TeamUser.create(req.body);
	
		res.status(201).send({message: "TeamUser created"});
  }
	catch(err){
		res.status(500).json(err);
	}
}

const deleteUserToTeam=async (req,res) => {
	try{
		TeamUser.findOne({
            where:{
				teamId: req.params.teamId,
				userId: req.params.userId
            }
        }).then(element=>{
            if(element!=null)
               element.destroy();
               else
               {
                throw Error("This teamuser does not exist");
               }
        })
        res.status(200).send({message:"Deleted user"});
	}
	catch(err){
		res.status(500).json(err);
	}
}


module.exports={
getAllTeamUsers,
addNewUserToTeam,
createTeamUser,
deleteUserToTeam
 
};