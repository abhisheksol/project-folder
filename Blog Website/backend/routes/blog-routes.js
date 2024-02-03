const express = require('express');
const blog_controller = require('../controller/blog-controller');
const blog_routes=express.Router();

blog_routes.get("/blog",blog_controller.get_all_blog)
blog_routes.post("/blog/add",blog_controller.add_blog)
blog_routes.put("/blog/update:id",blog_controller.update_blog)
blog_routes.get("/blog/:id",blog_controller.get_by_id)
blog_routes.delete("/blog/delete/:id",blog_controller.delete_by_id)
blog_routes.get("/blog/get/:id",blog_controller.get_users_blog_by_id)

module.exports=blog_routes;   