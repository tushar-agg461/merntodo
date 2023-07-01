const express=require("express");
const { addTodo } =require("../controller/todoController") ;
const {getAllTodo } =require('../controller/todoController'); 
const { toggleTodo}= require('../controller/todoController');
const {updateTodo} =require('../controller/todoController') ;
const { deleteTodo } = require("../controller/todoController") ;
const route= express.Router();

route.post('/todos',addTodo)
route.get('/todos', getAllTodo)
route.get('/todos/:id',toggleTodo)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id',deleteTodo)

module.exports= route;