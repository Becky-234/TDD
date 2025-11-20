const express = require('express')
const app = express()
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
})


app.post('/todos', (req, res) => {
    const todo ={
        id: Date.now(),
        text: req.body.text,
        completed: false
    }
    todos.push(todo);
    res.status(201).json(todo)
});


app.patch('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id)
    if (!todo) {
        return res.status(400).json({error: 'Not found'})
    }
    todo.completed = true;
    res.json(todo);
})

module.exports = app
