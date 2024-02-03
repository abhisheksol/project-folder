const express = require('express');
const routes=express.Router()
const controller_routes = require('../controller/user-controller');
routes.get("/",controller_routes.get_all_blog)
routes.post("/signup",controller_routes.signup)
routes.post("/login",controller_routes.login)

module.exports= routes;