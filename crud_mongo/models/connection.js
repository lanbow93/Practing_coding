require("dotenv").config()
const mongoose = require("mongoose")

// Establish connection
mongoose.connect(process.env.DATABASE_URL);

// Connection Events
mongoose.connection
.on("open", () => {console.log("Connected to Mongo")})
.on("close", () => {console.log("Disconnected from Mongo")})
.on("error", (error) => {console.log(error)})


// Export the Mongoose object
module.exports = mongoose