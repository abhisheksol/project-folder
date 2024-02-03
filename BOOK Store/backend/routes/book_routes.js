const express = require('express');
const routes=express.Router()
const bookmodel = require('../model/book_models');
const control_routes = require('../controller/book_controll');

routes.get('/' ,control_routes.getallbook)
routes.get('/:id' ,control_routes.bookid)
routes.post('/' ,control_routes.addbooks)
routes.put('/:id' ,control_routes.updatebook)
routes.delete('/:id' ,control_routes.deletebook)

module.exports=routes
