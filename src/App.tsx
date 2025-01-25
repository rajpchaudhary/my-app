import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>        
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>My App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>      
    </>
  )
}

export default App
