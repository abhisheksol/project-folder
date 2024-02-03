const express = require('express');
const model1 = require('./mongodb.js');
const { model } = require('mongoose');
const app=express()

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/project'));
app.use(express.urlencoded({ extended: true })); 
app.set("view engine","ejs")
app.use(express.json())
 
app.get("/",(req,res)=>{
    res.render("other/registration")
})
app.post("/login",async(req,res)=>{
     const data= req.body
     const find1=await model1.find(data)  //check email and password
     if(find1.length==0){
      // res.send("u did not registered plz register")
      res.render("other/registration")
     }
     else{
        res.render("project/index")
        // res.send("u logined successfully")
     }
     console.log(data);
})

// .....................................regisration route...........................
app.post("/registration",async(req,res)=>{
  const data=req.body
  console.log(data);

  const check = await model1.find({ email: data.email });
  if(check.length === 0){
    res.send("welcome loged in")
    const modelsave=new model1(data) 
    const save=await modelsave.save()
    console.log(save);
  }
  else{
    res.send("Email address is already in use.");
  }
  
  
})


app.get("/login", (req, res) => {
  res.render("login"); // Assuming "login.ejs" is in your "views" directory
});
app.get("/registration", (req, res) => {
  res.render("./other/registration"); // Assuming "login.ejs" is in your "views" directory
});

app.listen(3000) 