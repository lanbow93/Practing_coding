// Dependencies
const express = require("express");
const Soda = require("../models/soda");

// Create router object

const router = express.Router();

// Registering routes with router
// Index get .soda should get a list of sodas
router.get("/", (req, res) => {
    res.render("soda/index.ejs", {
        sodas: Soda.getAll()
    })
});

// Show Route /soda/:id -> page on an indivisual route
router.get("/:id", (req, res) => {
    res.render("soda/show.ejs", {
        soda: Soda.getOne(req.params.id)
    })
})


// Export the router
module.exports = router;