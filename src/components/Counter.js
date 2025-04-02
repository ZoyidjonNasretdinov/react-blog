import React from 'react'

const Counter = ({increment, decrement, reset}) => {
  return (
    <div className='btn-group'>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
      <button className='btn btn-danger' onClick={decrement}>Decrement</button>
      <button className='btn btn-secondary' onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
