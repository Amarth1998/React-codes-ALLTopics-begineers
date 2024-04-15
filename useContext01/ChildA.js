import React, { useContext } from 'react'
import ChildB from './ChildB'
import { usercontext } from './App'

const ChildA = () => {
    const user=useContext(usercontext)
  return (
    <>
    <h1>chile A : {user}</h1>

     <ChildB/> 
    </>
  )
}
export default ChildA
