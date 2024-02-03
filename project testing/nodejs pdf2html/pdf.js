const { log } = require('console');
const express = require('express');
const app=express()

app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.set("view engine","ejs")
app.use(express.static(__dirname+"/views"))

app.get("/",(req,res)=>{
    res.render("form")
})
app.post("/pay", (req, res) => {
    const data = req.body;
    console.log(data);
    res.render("recipt",{data});
});


 
app.listen(5000)