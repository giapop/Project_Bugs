const bugController=require("../controllers/bug");
const router = require('express').Router();

router.get("/", bugController.getAllBugs);
router.post("/", bugController.createBug);
router.put("/:bugId", bugController.updateStatus);
router.get("/listBugs", bugController.listBugs);

module.exports = router;