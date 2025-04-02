import Counter from "./components/Counter"
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <Counter increment = {increment} decrement = {decrement} reset = {reset}/>
    </div>
  )
}

export default App
