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

// New Route GET /soda/new -> page with a create form
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})

// Create Route Post /soda -> creates a new soda, redirect back to index
router.post("/", (req, res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.create(req.body)
    res.redirect("/soda")
})

// EDIT route Get /soda/:id/edit -> create form to update soda
router.get(("/:id/edit"), (req, res) => {
    res.render("soda/edit.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})

// Update route Put .soda/:id -> received form datam updates soda, redirects to index
router.put("/:id", (req,res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.update(req.params.id, req.body)
    res.redirect("/soda")
})
// Show Route /soda/:id -> page on an indivisual route
router.get("/:id", (req, res) => {
    res.render("soda/show.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})


// Export the router
module.exports = router;