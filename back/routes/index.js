const router = require('express').Router();
const userRouter=require("./user");
const teamRouter=require("./team");
const teamUserRouter=require("./teamuser");
const projectRouter=require("./project");
const bugRouter=require("./bug");
const projectUserRouter=require("./projectuser");

router.use("/users",userRouter)
router.use("/teams",teamRouter)
router.use("/teamusers",teamUserRouter)
router.use("/projects",projectRouter)
router.use("/bugs",bugRouter)
router.use("/projectusers",projectUserRouter)

module.exports = router;