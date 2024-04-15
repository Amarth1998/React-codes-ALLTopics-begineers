import React from 'react'
import { useState } from 'react';
function App() {
  const [color,setcolor]= useState("red")
  return (
<>
   <h1>{color}</h1>
   <button onClick={()=>setcolor("yellow")} >button</button>
</>
)}
export default App;




