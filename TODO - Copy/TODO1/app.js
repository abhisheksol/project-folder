const express = require('express');
const app=express()
const render = require('./routes/run');
// middleware--------------------------------
app.set("view engine" ,"ejs")
const bodyParser = require('body-parser');
app.use(express.json())   
app.use(bodyParser.urlencoded({ extended: true }));
// routes-------------------------------------
app.use(render)
app.listen(3000)      