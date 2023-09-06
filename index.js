const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World, I am Kevin Diego')
})

app.listen(8000)