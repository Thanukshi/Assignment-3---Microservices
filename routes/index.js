const routes = require("express").Router();

const UserRoutes = require("./UserRoutes");

routes.get("/", (req, res) => {
  res.send("This is User Management System");
});

routes.use("/user", UserRoutes);
//routes.use("/loan", LoanRoutes);

module.exports = routes;
