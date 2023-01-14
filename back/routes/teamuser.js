const teamUserController=require("../controllers/teamuser");
const router = require('express').Router();

router.get("/", teamUserController.getAllTeamUsers);
router.post("/newUserToTeam", teamUserController.addNewUserToTeam);
router.post("/", teamUserController.createTeamUser);
router.delete("/users/:userId/teams/:teamId", teamUserController.deleteUserToTeam);

module.exports = router;