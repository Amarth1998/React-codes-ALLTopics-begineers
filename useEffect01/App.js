import React, { useEffect, useState } from 'react'
// useEffect
const App = () => {

    const [count ,setCount]=useState(0);
    useEffect(()=>{
           document.title=`Chats (${count})`  
    });

  return (
   <>  
   <h1>{count}</h1>
   <button onClick={ () => setCount(count+1) }>click</button>
   </>
  )
}

export default App





















// import React, { useEffect } from 'react'
// // useEffect
// const App = () => {

//     useEffect(()=>{
//         console.log('useEffect')     
//     });

//     console.log("hello outside")   //first exeacute this

//   return (
//    <>
  
   
//    </>
//   )
// }

// export default App
