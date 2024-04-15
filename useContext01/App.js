import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
//useContext hook
export   const usercontext=createContext()
const App = () => {
    const[name,setname]=useState("amarth")


  return (
   <>
   <usercontext.Provider value={name}> 
   
   <ChildA />
   </usercontext.Provider>
   </>
  )
}
export default App
