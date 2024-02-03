const model = require('../models/user');
const bcrypt = require('bcrypt');

const get_all_blog = async (req, res) => {
    const result = await model.find()
    return res.status(200).json({ result })
}

const signup=async(req,res)=>{
    const {name ,email,password}=req.body
    let username=await model.findOne({email})
    if(username){
        return res.status(400).json({message:"username has been used been used by other"})
    } 
    const Hash_Password=bcrypt.hashSync(password,10)
    const data=new model({
        name,
        email,
        password:Hash_Password,
        blogs:[],
    })
    await data.save()
    return res.status(200).json({data})
}

const login=async(req,res)=>{
    const {email,password}=req.body
    const Check_Email=await model.findOne({email})
    if(!Check_Email){
       return res.status(404).json({message:"NO such user email exist"})
    }
     const Chech_Password=bcrypt.compareSync(password,Check_Email.password)
     if(!Chech_Password){
        return res.status(400).json({message:"wrong password"})
     }
     return res.status(200).json({message:"Logined successfully", username :Check_Email})

}  
exports.get_all_blog = get_all_blog 
exports.signup = signup  
exports.login = login  