const projectUserController=require("../controllers/projectuser");
const router = require('express').Router();

router.get("/", projectUserController.getAllProjectUsers);
//router.post("/newUserToTeam", teamUserController.addNewUserToTeam);
router.post("/", projectUserController.createProjectUser);

module.exports = router;