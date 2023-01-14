const projectController=require("../controllers/project");
const router = require('express').Router();

router.get("/", projectController.getAllProjects);
router.post("/:projectId/bugs", projectController.addBugToProject);
router.post("/", projectController.createProject);
router.delete("/:projectId", projectController.deleteProject);
router.get("/:teamId", projectController.getProjects);
router.post("/:projectId/users/:userId", projectController.addUserToProject);

module.exports = router;