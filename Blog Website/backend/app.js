const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/user-routes');
const blog_routes = require('./routes/blog-routes');
const bodyParser = require('body-parser');
const app=express()
mongoose.connect("mongodb+srv://admin:EEy7ALskA6Mh0zcN@cluster0.cbpkzjm.mongodb.net/").then(()=>
    console.log("database connected")
)
app.use(bodyParser.json());
app.use(routes)
app.use(blog_routes)
// EEy7ALskA6Mh0zcN 

app.listen(5000)    