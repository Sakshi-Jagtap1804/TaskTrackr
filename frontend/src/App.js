import React from 'react'
import TodoList from './components/TodoList'
import './styles.css'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center my-4">TaskTrackr</h1>
      <TodoList />
    </div>
  )
}

export default App
