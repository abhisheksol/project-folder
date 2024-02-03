const express=require("express")  //1.server
const app=express()               //1.server
const path = require('path');     //1.server
const hbs = require('hbs');
const collection=require("./mongodb")   //giving the path of "mongodb.js" so it cn access mongodb data
app.use('/public',express.static('public'))
const tempelatePath=path.join(__dirname,'../tempelates')// to get the hbs file
const publicPath = path.join(__dirname, "../public");

// Serve static files from the public folder
app.use(express.static(publicPath));

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.render("login")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})


app.post("/signup",async(req,res)=>{

const data={// get the name and password entered by the user
    name:req.body.name,
    password:req.body.password
}
// give the data to the mongodb
await collection.insertMany([data])

res.render("login")


})
app.post("/login",async(req,res)=>{

try{
    const check= await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
        res.render("home")
    }
    else {
        return res.send("Wrong password");
      }
}
catch{
    res.send("wrong details")
}

// give the data to the mongodb


res.render("home")


})

app.listen(3000,()=>{                        //1.server
    console.log("port connected 3000");      //1.server
})                                           //1.server