const express = require("express");
const Dog = require("../models/dog");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("dog/index.ejs", {
        dogs: Dog.getAll()
    })
})

module.exports = router