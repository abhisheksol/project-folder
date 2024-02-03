const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const { name } = require('ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.set("view engine","ejs")
app.use(express.static(__dirname+"/views"))
app.get('/',(req,res)=>{
    res.render("form")
 
})

app.post("/get",(req,res)=>{
    console.log(req.body.name);
    let name=req.body.name
    res.render("cerif",{name})
})
app.listen(3000)