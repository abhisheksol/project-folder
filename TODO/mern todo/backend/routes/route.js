const express = require('express');
const Cn = require("../controller/controller");
const User = require("../controller/user");

const route=express.Router()

route.get("/",Cn.get)
route.post("/add/:id",Cn.add_todo)
route.post("/add/user",User.addUser)

module.exports=route