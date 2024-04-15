import React, { useRef } from 'react'
// useRef 
const App = () => {
  let a=useRef(null);

  const handlInput=()=>{
    a.current.value="amarth"
    // a.current.focus() ;
    // a.current.style.color="red";
    // a.current.style.display="none" 
  }
  return (
    <>

    <input type="text" ref={a} />
      <button onClick={handlInput}>button</button>
    </>
  )
}

export default App
