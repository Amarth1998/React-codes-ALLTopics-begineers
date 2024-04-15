import React ,{useRef, useState} from 'react'
// uncontrolled form  useRef

const App = () => {
// it like a usestate only and its preserve the value ,NO re render   
const name=useRef(null)
const [show,setshow]=useState(false)

const submitForm=(e)=>{
  e.preventDefault();
  
  const nname=name.current.value;
  nname==="" ? alert("fill data"): setshow(true)



}

  return (
    <>
<form action="" onSubmit={submitForm}>
  <input type="text"  ref={name} />
  <button>buttoon</button>
  <p>{show ? `your name is ${name.current.value}`:" "}</p>
</form>

      
    </>
  )
}

export default App
