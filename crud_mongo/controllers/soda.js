const express = require("express")
const Soda = require("../models/soda")

// Create the router
const router = express.Router();

// Error handler
function errorHandler(error, res) {
    res.json(error)
};

// Routes

// SEED Route
router.get("/seed", async (req, res) => {
    await Soda.remove({}).catch((error => errorHandler(error, res)))
    const sodas = await Soda.create([
        {name: "Orange", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Rootbeer", color: "Brown", readyToSell: true}
    ])
    res.json(sodas)
})

//INDUCES
// Index Route - Get - List All Sodas
router.get("/", async (req, res) => {
    const sodas = await Soda.find({}).catch((error => errorHandler(error, res)))
    res.render("soda/index.ejs", {sodas})
})
// New Route = Get = Get The New form 
router.get("/new",  (req, res) => {
    res.render("soda/new.ejs");
})

// Destroy Route - Delete Deleted One Soda
router.delete("/:id", async (req, res) => {
    await Soda.findByIdAndRemove(req.params.id).catch((error => errorHandler(error, res)))
    res.redirect("/soda")
})

// Update Route - Put - Updates One Soda

// Create Route - Post - Creat t form

router.post("/", async (req, res) => {
    // Make sure to check of ready to Sell exists
    req.body.readyToSell = Boolean(req.body.readyToSell) 
    await Soda.create(req.body).catch((error => errorHandler(error, res)))
    res.redirect("/soda")
})

// Show Route - Get 
router.get("/:id", async (req, res) => {
    const soda = await Soda.findById(req.params.id);
    res.render("soda/show.ejs", {soda})
})


// Export the routes
module.exports = router