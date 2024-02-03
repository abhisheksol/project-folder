const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/myRandomDB", function (err, db) {
//      if(err) throw err;   
//   // Use this space to pass MongoDB CRUD code here             
// });
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpTutorial")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection