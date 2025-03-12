const express = require('express')
const router = express()

router.get('/', (req , res) => {
    res.send("List of Users")
})

router.get('/user', (req , res) => {
    res.send("Here is one user")
})

router.get('/user/:id', (req , res) => {
    res.send(`This user's ID is : ${req.params.id}`)
})

router.post('/create', (req , res) => {
    res.send("Create User")
})

module.exports = router
