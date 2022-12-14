// Import Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const DogRouter = require("./controller/dog")

// Global variables
PORT = process.env.PORT;

// Creating app object
app = express();

// Middleware 
app.use(morgan("tiny"));
app.use("/dogs", DogRouter);
app.use("/static", express.static("public"))

// Get for home page
app.get("/", (req, res) => {
    res.send("Dog server is working")
})

// creating server listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})
