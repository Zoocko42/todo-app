const express = require("express");
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = 5500;

const Model = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", controllers);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App running on port ${PORT}!")
    });
});