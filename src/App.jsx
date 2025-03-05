import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever 'todos' changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new to-do
  const addTodo = () => {
    if (todo.trim() === '') return; // Prevent empty todos
    setTodos([...todos, { text: todo, finished: false }]);
    setTodo(''); // Clear input field after adding
  };

  // Function to delete a specific to-do
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Function to clear all to-dos
  const clearAll = () => {
    setTodos([]);
  };

  // Function to toggle the completion status of a to-do
  const toggleFinished = (index) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, finished: !item.finished } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="entire-todo">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          {/* Adding Todo */}
          <div className="add-todo">
            <div className="add-todo-text">
              <h2>Add Todo:</h2>
            </div>
            <div className="add-todo-input">
              <input
                type="text"
                className="todo-input"
                placeholder="Add todo here..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="add-todo-button" onClick={addTodo}>
                Add
              </button>
              <button className="clear-all-button" onClick={clearAll}>
                Clear All
              </button>
            </div>
          </div>

          {/* Displaying Todos */}
          <div className="display-todo">
            <div className="display-todo-text">
              <h2>Your Todos:</h2>
            </div>
            <div className="toggle-finished">
              <input
                type="checkbox"
                checked={showFinished}
                onChange={() => setShowFinished(!showFinished)}
              />
              <label>Show Finished Todos</label>
            </div>

            <div className="display-todo-list">
              {todos.length === 0 ? (
                <h3>No Todos to show.</h3>
              ) : (
                todos.map((item, index) =>
                  showFinished || !item.finished ? (
                    <div className="todo-item" key={index}>
                      <div
                        className={`todo-item-text ${
                          item.finished ? 'finished' : ''
                        }`}
                      >
                        <h3>{item.text}</h3>
                      </div>
                      <div className="todo-item-buttons">
                        <button
                          className="toggle-button"
                          onClick={() => toggleFinished(index)}
                        >
                          {item.finished ? 'Undo' : 'Done'}
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : null
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
