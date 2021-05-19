const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose
.connect("mongodb://<username>:<password>@mongo:27017/?authSource=admin")
.then(() => console.log("Database connected successfully"))
.catch((e) => console.log("Error"))

app.get("/", (req, res) => {
    res.send("<h2>Hello World!!!</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))