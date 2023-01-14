const User = require("../models/user");
const {restore}=require("../models/user");
const Team=require("../models/team");
const Project=require("../models/project");
const Bug=require("../models/bug");
const ProjectUser=require("../models/projectuser");
const TeamUser=require("../models/teamuser");


const createUser = async (req,res) => {
	try {
        //exista deja un user cu acest email
     const registeredUserWithEmail  =await User.findOne({
        where:{
            email:req.body.email
        }
     })
     if(registeredUserWithEmail!=null){
        throw Error("This email is already taken! ")
     }

		const newUser = await User.create(req.body);
		return res.status(200).json(newUser);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllUsers = async (req,res) => {
	try{
		const users = await User.findAll();
		res.status(200).json(users);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const deleteUser=async (req,res) => {
	try{
		User.findOne({
            where:{
                id:req.params.userId
            }
        }).then(element=>{
            if(element!=null)
               element.destroy();
               else
               {
                throw Error("This user does not exist");
               }
        })
        res.status(200).send({message:"Deleted user"});
	}
	catch(err){
		res.status(500).json(err);
	}
}


const getAllUsersByTeamId = async (req,res) => {
	try{
		const users = await User.findAll();
		res.status(200).json(users);
        //daca exista echipa specificata, se doreste afisarea utilizatorilor din echipe
            users = User.findAll({
                include: [
                    {
                        required: true,
                        model: Team,
                        through: { where: {
                            teamId: req.params.teamId
                        }}
                    }
                ]
            })
            res.status(200).json(users);
	}
	catch(err){
		res.status(500).json(err);
	}
}


const  addBugToUser= async (req,res) => {
	try {
      
		const user = await User.findByPk(req.params.userId);
		const bug=await Bug.findByPk(req.params.bugId);

        if(user==null){
			return res.status(404).send({message: "Not found user"});
        }
        if(bug==null){
			return res.status(404).send({message: "Not found bug"});
        }

        const projectuser=ProjectUser.findOne({
            where: {
                isTester: false,
                userId: req.params.userId
            }
        })
        if(projectuser==null){
			return res.status(404).send({message: "Not found user in project"});
        }
        if(bug.userId!=null){
             return res.status(404).send({message: "Bug was assigned"});
            
        }

        bug.userId=user.id;
        bug.status="in progress";
        await bug.save();
        return res.status(200).json(bug);
		
    }
	catch(err){
		return res.status(500).json(err);
	}
};


    const  addUserTester= async (req,res) => {
        try {
            const user=await User.findByPk(req.params.userId);
            const project = await Project.findByPk(req.params.projectId);
            if(user==null){
                return res.status(404).send({message: "This user is  not found"});
            }
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
                    isTester:true,
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
    
    const login = async (req,res) => {
        try{
            const user = await User.findOne({
                where: {email: req.body.email,
                         password: req.body.password}
            })
            if(user==null){
                return res.status(404).send({message: "Not found user"});
 
            }
            let token=await generateToken(20);
            user.token=token;
            await user.save();
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    const loginUserFound = async (req,res) => {
        try{
            const user = await User.findAll({
                where: {token: token}
            })
            if(user==null){
                return res.status(404).send({message: "Not found user"});
 
            }
        
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async function generateToken(length) {
        var result = ''; 
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
        var charactersLength = characters.length; 
        for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
        return result; 
    } 
        


module.exports={
    deleteUser,
    createUser,
    getAllUsers,
    getAllUsersByTeamId,
    addBugToUser,
    addUserTester,
    login,
    loginUserFound,
   
 
};