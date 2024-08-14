import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    addTodo({ title, completed: false })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new Task..."
      />
      <button type="submit">Add Tasks</button>
    </form>
  )
}

export default TodoForm
