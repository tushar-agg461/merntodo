import Todo from "../model/Todo.js";


export const addTodo = async (req, res) => {
    try {
        const newTodo = Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return res.status(200).json(newTodo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });

        return res.status(200).json(todos);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

export const toggleTodo = async (req, res) => {
    try {
        const todoref = await Todo.findById(req.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoref.done }
        )
        await todo.save();

        return res.status(200).json(todo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateTodo = async (req, res) => {
    try {

        await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )
        const todo= await Todo.findById(req.params.id);

        return res.status(200).json(todo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteTodo = async (req, res) => {
    try {

        const todo=await Todo.findByIdAndDelete(req.params.id)
        

        return res.status(200).json(todo);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}