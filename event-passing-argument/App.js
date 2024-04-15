import React from 'react'
function App() {
  const display=(a)=>{alert(a)}
  const display1=(a)=>{alert("hello " + a )}
  return (
   <>
<button onClick={()=>{display("amarth")}} >Onclick event </button> <br />

<button onClick={()=>{display1("amarth")}} >Onclick event </button> <br />
   </>
  )
}
export default App;


