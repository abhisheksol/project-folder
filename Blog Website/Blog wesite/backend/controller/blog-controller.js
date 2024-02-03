const express = require('express');
const model = require('../models/blog');
const users = require('../models/user');
const { default: mongoose } = require('mongoose');

const get_all_blog = async (req, res) => {
    const blogs = await model.find().populate('user');
    if (!blogs) {
        return res.status(404).json({ message: "No! blogs found" })
    }
    return res.status(200).json({ blogs })

}

const add_blog = async (req, res) => {
    const { title, discription, image, user } = req.body
    let existing_user = await users.findById(user)
    // console.log("the existiong data",existing_user);
    if (!existing_user) {
        return res.status(400).json({ message: "unable to find the userId" })

    }
    const data = new model({
        title,
        discription,
        image,
        user
    })
    const session = await mongoose.startSession(); //hai fakta acid property follow karna sathi use kalya 
    // jar transition fail jala tar rollback karna sathi / nahi kala asta tari pan chala asta
    session.startTransaction();
    await data.save({ session })
    existing_user.blogs.push(data); 
    await existing_user.save({ session })
    await session.commitTransaction();

    return res.status(200).json({ data })

}

const update_blog = async (req, res) => {
    const { title, discription, image } = req.body
    const blogid = req.params.id
    const data = await model.findByIdAndUpdate(blogid, {
        title,
        discription,
        image
    })
    return res.status(200).json({ data })


}

const get_by_id = async (req, res) => {
    const Id = req.params.id
    try {
        const data = await model.findById(Id)
        if (!data) {
            return res.status(404).json({ message: "no such id found!!" })

        }
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ message: "no such id found!!" })

    }

}

const delete_by_id = async (req, res) => {
    const Id = req.params.id;
console.log("thihs is id:",Id);
    try {
        // Find the blog and retrieve the user ID before deleting
        const blog = await model.findById(Id);

        if (!blog) {
            return res.status(404).json({ message: "No such id found!!" });
        }

        const userId = blog.user;
 
        // Delete the blog
        const deletedBlog = await model.findByIdAndDelete(Id);

        // Check if the blog was successfully deleted
        if (!deletedBlog) {
            return res.status(404).json({ message: "No such id found!!" });
        }

        // Remove the deleted blog from the user's blogs array
        const updatedUser = await users.findByIdAndUpdate(
            userId,
            { $pull: { blogs: Id } },
            { new: true } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // console.log(updatedUser.blogs); // Check the updated blogs array

        return res.status(200).json({ message: "Successfully deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const get_users_blog_by_id = async (req, res) => {
    try {
        console.log("It is running...");
        const user_id = req.params.id;

        // Find the user by ID
        const user = await users.findById(user_id).populate('blogs');
        
        if (!user) {
            return res.status(404).json({ message: "No such user found" });
        }

        

        // Construct the response object
        const response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            blogs: user.blogs
        };

        console.log("This is data:", response);
        res.status(200).json({ User_info: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.get_all_blog = get_all_blog
exports.add_blog = add_blog
exports.update_blog = update_blog
exports.get_by_id = get_by_id
exports.delete_by_id = delete_by_id
exports.get_users_blog_by_id = get_users_blog_by_id