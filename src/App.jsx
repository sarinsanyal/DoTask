import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
    </>
  )
}

export default App
