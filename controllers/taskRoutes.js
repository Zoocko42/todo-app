const router = require('express').Router();
// const sequelize = require('../../config/connection');
const Task = require("../models/Task");

router.get("/", (req, res) => {
    res.json("Bonjourno kids!")
});

module.exports = router;