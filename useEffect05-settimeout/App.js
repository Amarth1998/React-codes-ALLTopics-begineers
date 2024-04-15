import React, { useEffect, useState } from 'react'
// useEffect , without dependency ,and use setTimeout function 

const App = () => {
const[count,setcounts]=useState(0)

useEffect( ()=>{
 setTimeout( ()=>{setcounts((count)=>count+1)
    },1000 )
}  )

  return (
   <>
   <h1>{count}</h1>
   </>
  )
}

export default App
