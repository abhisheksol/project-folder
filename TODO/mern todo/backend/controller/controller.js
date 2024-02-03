const model = require('../model/todo_model');


const get = (req, res) => {
    res.send("It is running on routes");
}



const add_todo = async (req, res) => {
    const id=req.params.id
    const {todo}=req.body

    const insert_to_array=await model.findByIdAndUpdate(
        id,
        {$push :{todo:todo}},
        { new: true, upsert: true }

    )
    res.send(insert_to_array.todo)
        
   
}

exports.get = get;
exports.add_todo = add_todo;


// const id = req.params.id; // Assuming you're getting the id from the request parameters
//         const { todo } = req.body;

//         // Use findOneAndUpdate to update or create a document with the given id
//         const updatedDocument = await model.findByIdAndUpdate(
//             id,
//             { $push: { todo: todo } },
//             { new: true, upsert: true }
//         );

//         res.send({ todo: updatedDocument.todo });