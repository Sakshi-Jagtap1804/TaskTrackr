import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('/api/todos')
      setTodos(response.data)
    }
    fetchTodos()
  }, [])

  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/todos',
        newTodo,
      )
      setTodos([...todos, response.data])
    } catch (error) {
      console.error('Error adding the TaskTrackr:', error)
    }
  }

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo._id === id)
    const updatedTodo = { ...todo, completed: !todo.completed }

    await axios.put(`/api/todos/${id}`, updatedTodo)
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
  }

  const updateTodo = async (id, updatedTodo) => {
    await axios.put(`/api/todos/${id}`, updatedTodo)
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
  }

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`)
    setTodos(todos.filter((todo) => todo._id !== id))
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import TodoItem from './TodoItem'
// import TodoForm from './TodoForm'

// const TodoList = () => {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/todos')
//         setTodos(response.data)
//       } catch (error) {
//         console.error('Error fetching the TaskTrackr:', error)
//       }
//     }
//     fetchTodos()
//   }, [])

//   const addTodo = async (newTodo) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/todos',
//         newTodo,
//       )
//       setTodos([...todos, response.data])
//     } catch (error) {
//       console.error('Error adding the TaskTrackr:', error)
//     }
//   }

//   // const toggleComplete = async (id) => {
//   //   const todo = todos.find((todo) => todo._id === id)
//   //   try {
//   //     const response = await axios.put(
//   //       `http://localhost:5000/api/todos/${id}`,
//   //       {
//   //         ...todo,
//   //         completed: !todo.completed,
//   //       },
//   //     )
//   //     setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)))
//   //   } catch (error) {
//   //     console.error('Error updating the TaskTrackr:', error)
//   //   }
//   // }

//   const toggleComplete = async (id) => {
//     const todo = todos.find((todo) => todo._id === id)
//     const updatedTodo = { ...todo, completed: !todo.completed }

//     await axios.put(`/api/todos/${id}`, updatedTodo)
//     setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
//   }

//   const updateTodo = async (id, updatedTodo) => {
//     await axios.put(`https://localhost:5000/api/${id}`, updatedTodo)
//     setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
//   }

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/todos/${id}`)
//       setTodos(todos.filter((todo) => todo._id !== id))
//     } catch (error) {
//       console.error('Error deleting the TaskTrackr:', error)
//     }
//   }

//   return (
//     <div>
//       <TodoForm addTodo={addTodo} />
//       <ul className="todo-list">
//         {todos.map((todo) => (
//           <TodoItem
//             key={todo._id}
//             todo={todo}
//             toggleComplete={toggleComplete}
//             deleteTodo={deleteTodo}
//           />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TodoList
