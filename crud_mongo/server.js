// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

// Application Object
const app = express()

// Middleware
app.use(morgan("dev"));
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))

// Routes and routers
app.get("/", (req,res) => {
    res.send("Server is Working")
})

// Server Listeners
const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}`)
})