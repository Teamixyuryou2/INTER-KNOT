const express = require('express')
const app = express()
const userRoute = require('./routes/users')

app.get("/", (req, res) => {
    console.log("Hello")
    res.send("Heya")
})

app.use('/users', userRoute)

app.listen(4000)
