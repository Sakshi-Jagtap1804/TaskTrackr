const Todo = require('../models/Todo')

// Create a new To-Do item
const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
    })
    await todo.save()
    res.status(201).json(todo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Get all To-Do items
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json(todos)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Get a single To-Do item by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ error: 'To-Do not found' })
    res.status(200).json(todo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Update a To-Do item by ID
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!todo) return res.status(404).json({ error: 'To-Do not found' })
    res.status(200).json(todo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete a To-Do item by ID
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) return res.status(404).json({ error: 'To-Do not found' })
    res.status(200).json({ message: 'To-Do deleted' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
}
