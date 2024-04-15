import React from 'react'
import useCounter from './useCounter'

const App = () => {
   const [count,increment,decrement]=useCounter(0)
  return (
    <>
      <h1>{count}</h1> 
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
