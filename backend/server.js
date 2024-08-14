// Import required modules
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

// Import routes
const todoRoutes = require('./routes/todoRoutes')
// Import routes
const errorHandler = require('./middleware/errorHandler')

// Initialize Express app
const app = express()

// Connect to MongoDB
connectDB()

// Middleware to parse JSON bodies
app.use(express.json()) // Parse JSON bodies
app.use(cors()) //Enable CORS

// Use routes
app.use('/api', todoRoutes)

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running...')
})

// Use error handler middleware
app.use(errorHandler)

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
