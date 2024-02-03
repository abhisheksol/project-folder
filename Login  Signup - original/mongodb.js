const mongoose = require('mongoose');
const { Schema } = require('mongoose');
mongoose.pluralize(null)

mongoose.connect( "mongodb://127.0.0.1:27017/login_signup") 

const sch= mongoose.Schema({
    email:String,
    password:String
})
module.exports=mongoose.model("logindata",sch)

