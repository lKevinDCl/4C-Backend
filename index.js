const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World, I am Kevin')
})

app.listen(8000)