const express = require('express')
const router = express.Router()
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController')

// Define routes
router.post('/todos', createTodo) // Create a new To-Do item
router.get('/todos', getTodos) // Get all To-Do items
router.get('/todos/:id', getTodoById) // Get a single To-Do item by ID
router.put('/todos/:id', updateTodo) // Update a To-Do item by ID
router.delete('/todos/:id', deleteTodo) // Delete a To-Do item by ID

module.exports = router
