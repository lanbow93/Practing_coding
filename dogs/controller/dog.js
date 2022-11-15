const express = require("express");
const Dog = require("../models/dog");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("dog/index.ejs", {
        dogs: Dog.getAll()
    })
})

router.get("/:id", (req, res) => {
    res.render("dog/show.ejs", {
        dog: Dog.getOne(req.params.id)
    })
})

module.exports = router