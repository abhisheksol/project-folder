const express = require('express');
const app=express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("radio")
})


app.post("/select",(req,res)=>{
    const data=req.body.items
    console.log(data);
   res.send("hello")
}) 
app.listen(3000)