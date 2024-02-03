const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhisheksolapure2003:l7OycFvfFPRzoeFF@cluster0.lycszbc.mongodb.net/")
.then(()=>console.log("database connected"))

schemas=new mongoose.Schema({
    "name":String,
    "address":String,
    "phNO":Number
})

module.exports=mongoose.model("Form",schemas)