import React, { useEffect, useRef, useState } from 'react'
//tracking ccurrent content
const App = () => {

  const[count,setcount]=useState("")
  const prvious=useRef("") ;
  useEffect(()=>{
    prvious.current=count
  },[])
  
  return (
    <><input type="text" value={count} onChange={(e)=>setcount(e.target.value)} />
    <h1>{count}</h1>
    <h2>{prvious.current}</h2>
      
    </>
  )
}

export default App





import React, { useEffect, useRef, useState } from 'react'
//tracking previour chnge
const App = () => {

  const[count,setcount]=useState("")
  const prvious=useRef("") ;
  useEffect(()=>{
    prvious.current=count
  })

  return (
    <><input type="text" value={count} onChange={(e)=>setcount(e.target.value)} />
    <h1>{count}</h1>
    <h2>{prvious.current}</h2>
      
    </>
  )
}

export default App
