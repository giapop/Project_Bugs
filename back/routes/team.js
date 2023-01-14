const teamController=require("../controllers/team");
const router = require('express').Router();

router.get("/", teamController.getAllTeams);
router.post("/", teamController.createTeam);
router.post("/:teamId/projects", teamController.createProjectToTeam);

module.exports = router;