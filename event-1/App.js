import React from 'react'

function App() {
  const display=()=>{alert("this is onclick event")}
  const hover=()=>{alert("this is onmouseover event")}

  return (
   <>
<button onClick={display} onMouseOver={hover} >onMouseOver event</button>

<button onClick={display} >Onclick event </button>
   </>
  )
}
export default App;


