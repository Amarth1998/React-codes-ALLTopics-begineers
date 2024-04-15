import React from 'react'
import { useState } from 'react';
function App() {
  const [car,setcar]= useState({
    "name":"bmw",
    "year":1998,
    "model":"thar"
  })
  
  return (
<>
   
   It is a {car.name} {car.year} {car.model}
</>
)}
export default App;




