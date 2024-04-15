import React, { useEffect, useState } from 'react'

const App = () => {
    const [count,setcount]=useState(0)
    const[cal,setcal]=useState(0)

useEffect( ()=>{

    setcal(()=>count*2)
},[count])

  return (
   <>
   <h1>{cal}</h1>
   <h1>{count}</h1>
   <button onClick={()=> setcount(count+1)}>add</button><br/>
   </>
  )
}

export default App
