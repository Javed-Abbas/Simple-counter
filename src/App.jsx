import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <h2>Simple Counter</h2>
      <div className="card">
        <h1>{count} </h1>
        <button onClick={() => setCount( count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount( count - 1)} disabled = {count === 0}>
        decrement
        </button>
        <button onClick={() => setCount(0)} disabled = {count === 0}>
        Reset
        </button>
      </div>  
    </>
  )
}

export default App
