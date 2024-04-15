// When state is updated, the entire state gets overwritten.

// What if we only want to update the color of our car?

// If we only called setCar({"name":"ford"}), this would remove the  model, and year from our state.

// We can use the JavaScript spread operator to help us.

import React from 'react'
import { useState } from 'react';
function App() {
  const [car,setcar]= useState({
    "name":"bmw",
    "year":1998,
    "model":"thar"
  })
  const update=()=>{
    setcar(prev=> ({...prev,"name":"ford"}))
  }
return (
<>
   It is a {car.name} {car.year} {car.model}
   <button onClick={update}>button</button>
</>
)}
export default App;





