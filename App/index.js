const express = require('express');
const app = express();
const path = require('path');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//declaring the public folder
app.use(express.static('public'))

// index page
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname+'/views/index.html'))
})
app.listen(8080);