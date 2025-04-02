import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, reset } from '../reducers/countSlice'

const Counter = () => {
  const dispatch = useDispatch()

  return (
    <div className='btn-group'>
      <button className='btn btn-primary' onClick={() => dispatch(increment)}>Increment</button>
      <button className='btn btn-danger' onClick={() => dispatch(increment)}>Decrement</button>
      <button className='btn btn-secondary' onClick={() => dispatch(reset)}>Reset</button>
    </div>
  )
}
export default Counter
