import React from 'react'
import { useState } from 'react';
function App() {
  const [color,setcolor]= useState("red")
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  return (
<>
   
   It is a {color} {model} from {year}.
</>
)}
export default App;




