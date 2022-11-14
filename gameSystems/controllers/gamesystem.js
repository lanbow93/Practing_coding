const express = require("express");
const Router = express.Router();
const GameSystems = require("../models/gamesystem")

Router.get("/", (req, res) => {
    res.render("./gamesystem/index.ejs", {
        Systems: GameSystems
    })
})



module.exports = Router;