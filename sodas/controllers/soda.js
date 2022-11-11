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


// Export the router
module.exports = router;