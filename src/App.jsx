import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  const AddTodo = () => {
    console.log("Added Todo")
  }

  const clearAll = () => {
    console.log("Cleared All")
  }

  const handleDelete = () => {  
    console.log("Delete")
  }

  const handleEdit = () => {
    console.log("Edit")
  }

  return (
    <>
      <div className="entire-todo"> {/* This is the parent div */}
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          {/* Adding Todo */}
          <div className="add-todo">
            <div className="add-todo-text">
              <h2>
                Add Todo:
              </h2>
            </div>
            <div className="add-todo-input">
              <input type="text" className="todo-input" placeholder="Add todo here..." />
              <button className="add-todo-button" onClick={AddTodo}>Add</button>
              <button className="clear-all-button" onClick={clearAll}>Clear All</button>
            </div>
          </div>
          {/* Displaying Todo */}
          <div className="display-todo">
            <div className="display-todo-text">
              <h2>
                Your Todos:
              </h2>
            </div>
            <div className="display-todo-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias magnam dignissimos doloremque. Perspiciatis, animi dolore voluptas, deleniti recusandae dicta rem maxime quas qui veritatis perferendis natus libero ab autem.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
