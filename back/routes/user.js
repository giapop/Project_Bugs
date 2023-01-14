const userController=require("../controllers/user");
const router = require('express').Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.delete("/:userId", userController.deleteUser);
router.get("/:teamId", userController.getAllUsersByTeamId);
router.post("/:userId/bugs/:bugId", userController.addBugToUser);
router.post("/:userId/projects/:projectId", userController.addUserTester);
router.post("/login", userController.login);

module.exports = router;