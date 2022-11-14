// Importing Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const SystemRouter = require("./controllers/gamesystem")

// Global Variables
const PORT = process.env.PORT

// Creating app object
const app = express();

// Middleware
app.use(morgan("tiny"))
app.use("/systems", SystemRouter)

// Creating home route

app.get("/", (req, res) => {
    res.send("Game System server is running")
})

// Creating app listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`)
})