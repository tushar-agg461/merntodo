import express,{Router} from "express";
import { addTodo } from "../controller/todoController.js";
import {getAllTodo } from '../controller/todoController.js'
import { toggleTodo} from '../controller/todoController.js';
import  {updateTodo} from '../controller/todoController.js'
import { deleteTodo } from "../controller/todoController.js";
const route= express.Router();

route.post('/todos',addTodo)
route.get('/todos', getAllTodo)
route.get('/todos/:id',toggleTodo)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id',deleteTodo)

export default route;