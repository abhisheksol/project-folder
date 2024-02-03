const express = require('express');
const { dirname } = require('path');
const app=express()

app.get("/",(req,res)=>{
    res.render(__dirname +"index.html")
}).listen(3000)