const mongoose = require('mongoose')

// Define the schema for the To-Do item
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Create a model from the schema
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
