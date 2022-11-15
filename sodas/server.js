// Import dependencies
require("dotenv").config(); // Reads .env file & accessed by process.env
const express = require("express") // backend framework
const morgan = require("morgan") // Importing logger
const SodaRouter = require("./controllers/soda") // Importing router

// Global variables
const PORT = process.env.PORT

// Application object
const app = express(); 

// Middleware
app.use(morgan("tiny"))
app.use("/soda", SodaRouter)
app.use("/static", express.static("public"))

// Routes
app.get('/', (req, res) => {
    res.send("Server is working")
})


// Server listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})