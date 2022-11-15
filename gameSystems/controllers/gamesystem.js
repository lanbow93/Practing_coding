const express = require("express");
const Router = express.Router();
const GameSystems = require("../models/gamesystem")

Router.get("/", (req, res) => {
    res.render("./gamesystem/index.ejs", {
        Systems: GameSystems.getAll()
    })
})

Router.get("/:id", (req, res) => {
    res.render("./gamesystem/show.ejs", {
        GameSystem: GameSystems.getOne(req.params.id)
    })
})



module.exports = Router;