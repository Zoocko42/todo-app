const router = require('express').Router();
// const sequelize = require('../../config/connection');
const User = require("../models/User");


router.get("/", (req, res) => {
    res.json("Bonjour heroes!")
});

module.exports = router;