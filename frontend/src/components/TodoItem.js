import React, { useState } from 'react'

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(todo.title)

  const handleUpdate = () => {
    if (updatedTitle.trim()) {
      updateTodo(todo._id, { ...todo, title: updatedTitle })
      setIsEditing(false)
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}

      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
        />
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
