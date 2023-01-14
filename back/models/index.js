const sequelize = require("./database.js");
const Team=require("./team");
const User=require("./user");
const TeamUser=require("./teamuser");
const Project=require("./project");
const Bug=require("./bug");
const ProjectUser=require("./projectuser");


User.belongsToMany(Team, { through: TeamUser});
Team.belongsToMany(User,{through:TeamUser});

Team.hasMany(Project);

Project.hasMany(Bug);
User.hasMany(Bug);
// Project.belongsToMany(User);
// User.belongsToMany(Project);


Project.belongsToMany(User, { through: ProjectUser});
User.belongsToMany(Project, { through: ProjectUser})

module.exports = {
  sequelize,
  Team,
  User,
  TeamUser,
  Project,
  Bug
};