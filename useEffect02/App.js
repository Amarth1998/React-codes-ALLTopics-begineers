import React, { useEffect, useState } from 'react'
// useEffect
const App = () => {
   const [count ,setCount]=useState(0);
    useEffect(()=>{
        if (count>=1) {
           document.title=`Chats (${count})`  }
       else{
    document.title=`Chats`  
}});

  return (
   <>  
   <h1>{count}</h1>
   <button onClick={ () => setCount(count+1) }>click</button>
   </>
  )
}

export default App





















