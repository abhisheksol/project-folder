const express = require('express');
const route = require('./routes/route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app=express()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/NEW_TODO")
.then(()=>console.log("connected to db"))

app.use(route)
app.use(express.json());

app.listen(5000)