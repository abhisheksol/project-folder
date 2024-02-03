const routes = require('express').Router();
const { route } = require('express/lib/application');
const model = require('../schema');

routes.get("/",(req,res)=>{
    const data1=[""]
    res.render("todo",{data1});
    
    
})
  
routes.post("/render",async(req,res)=>{
    
    const data=req.body
    const db=new model(data);
    const save=await db.save()
    // console.log("data saved to db:==> ",save);

    const data1=await model.find()
    // res.send(to_find)
    console.log("this was added :",data1);

    res.render("todo",{data1});

    
    // console.log("this is data",req.body);
    // console.log("this is data",data);

     
})

.get("/delete_todo/:_id", async (req, res) => {
    const _id = req.params._id; // Access the _id parameter correctly
    console.log(_id);
    
    await model.deleteOne({ _id })
        
            const data1 = await model.find(); 
            console.log(data1);
            
            res.render("todo",{data1});
        
        
});

module.exports=routes;
