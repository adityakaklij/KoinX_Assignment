const express = require('express')

const app = express()

const port = 3000;


app.get('/', (req, res) => {
    res.send("Inside the get!")
})

app.get('/about/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`We got ${req.params.id}`)
})

app.listen(port, () => {
    console.log("Listing on the port")
})