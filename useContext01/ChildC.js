import React, { useContext } from 'react'
import { usercontext } from './App'
const ChildC = () => {
    const user=useContext(usercontext)
  return (
    <>
    <h1>child C : {user}</h1>
      
    </>
  )
}

export default ChildC
