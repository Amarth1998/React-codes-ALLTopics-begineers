import React ,{ useState } from 'react'

function App() {
const [count , setCount]=useState(0);
const IncNum=()=>{
  setCount(count +1 );
} 
return (
<>
   <h1>{count}</h1>
   <button onClick={IncNum}>button</button>
</>
)}
export default App;





















