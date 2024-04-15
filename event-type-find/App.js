import React from 'react'
function App() {
  const display=(b)=>{alert(b.type)}
  return (
   <>
<button onClick={(event)=>{display(event)}} >event type </button>
   </>
  )
}
export default App;


