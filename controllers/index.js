const router = require("express").Router();
const sequelize = require('../config/connection');
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

// localhost:5500/api/task
router.use("/task", taskRoutes);

// localhost:5500/api/user
router.use("/user", userRoutes);

// Test route for fun and profit
// router.get("/index", (req, res) => {
//     res.json("Bonjour heroes!")
// });

module.exports = router;