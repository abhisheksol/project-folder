const mongoose = require('mongoose');

const schema=new mongoose.Schema({
  
    todo:[{
        type:String
    }]
})

module.exports=mongoose.model("TODO",schema)