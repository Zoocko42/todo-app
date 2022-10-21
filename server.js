const express = require("express");
const sequelize = require('./config/connection');

const app = express();
const PORT = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App running on port ${PORT}!")
    });
});