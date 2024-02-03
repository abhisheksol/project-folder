const bookmodel = require('../model/book_models');

// ********************************=get by id book=**************************************************************//
const bookid=async(req,res)=>{
    let bookbyid= req.params.id
    const gotbook=await bookmodel.findById(bookbyid)
    res.status(201).json({gotbook})
}
 
// ********************************=get all book=**************************************************************//

const getallbook = async (req, res) => {

    let books = await bookmodel.find()
    res.status(201).send({ books })
}
// ********************************=add book=**************************************************************//
const addbooks=async(req,res)=>{
    let {name,price,author,description,available,image,download}=req.body
    
    // ata db mada he store karcha ahe

    const add=new bookmodel({
        name,
        price,
        author,
        description,
        available,
        image,
        download
    })
    add.save()
    res.status(201).json({add})
    
}

// ********************************=BOOKs update=**************************************************************//
const updatebook=async(req,res)=>{
    let bookbyid= req.params.id
    let {name,price,author,description,available,image,download}=req.body
    const updated_book=await bookmodel.findByIdAndUpdate(bookbyid,{
        name,
        price,
        author,
        description,
        available,
        image,
        download
    })
    updated_book.save()
    res.status(201).json({updated_book})
}
  
// ********************************=BOOKs Delete=**************************************************************//
 const deletebook=async(req,res)=>{
    const deleteid=req.params.id
    const deleted_book=await bookmodel.findByIdAndDelete(deleteid)

    res.status(201).json({
        deleted_book
    })
 }

exports.getallbook = getallbook
exports.addbooks = addbooks
exports.bookid = bookid
exports.updatebook = updatebook
exports.deletebook = deletebook