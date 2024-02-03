const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e_com")
mongoose.pluralize(null)

const sch=mongoose.Schema({
    text:String,
    items:Array
})


module.exports= new mongoose.model("todo",sch)