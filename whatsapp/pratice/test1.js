const express = require('express');
const model = require('./database');
const app=express()
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index",{data:"abhishek"})
})

app.post("/sent",async(req,res)=>{
    const data=req.body
    console.log("this is form data coming :",data);
    let res1=await new model(data).save()
    
    console.log("the status of data saved:",res1);
   
    res.render("status", {data})
})
 

app.get("/database",async(req,res)=>{
    const data=await model.find()
    res.render("show_data",{data})
})

app.listen(3000)

 