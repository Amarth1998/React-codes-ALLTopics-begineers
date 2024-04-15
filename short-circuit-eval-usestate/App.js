import React, { useState } from 'react'
const App = () => {
    const[name,setname]=useState("")
  return (
    <div>
        <h1>d</h1>
      {name || "amarth"}      //not render

      {name && "amarth"}   //render
    </div>
  )
}
export default App
