// const userModel = require('../model/user');

const { use } = require("../routes/route");



const addUser = async (req, res) => {
   const {user}=req.body
   console.log(use);
};

exports.addUser=addUser 