// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  // Log the error details to the console (optional)
  console.error(err.stack || err.message)

  // Set the response status code based on the error type
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  // Respond with the error message
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
  })
}

module.exports = errorHandler
