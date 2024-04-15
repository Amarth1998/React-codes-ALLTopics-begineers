// useEffect with dependency  ,state
import React, { useEffect, useState } from 'react'
// useEffect
const App = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('useEffect with state dependency')     
    },[count]);
  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)}>click</button>
   </>
  )
}
export default App

//it will render first time and every time when state change useEffect will render












// // useEffect with dependency  ,empty []
// import React, { useEffect, useState } from 'react'
// // useEffect
// const App = () => {
//     const [count,setCount]=useState(0)

//     useEffect(()=>{
//         console.log('useEffect without dependency')     
//     },[]);

 
//   return (
//    <>
//    <h1>{count}</h1>
//    <button onClick={()=>setCount(count+1)}>click</button>
//    </>
//   )
// }
// export default App








// // useEffect without dependency 
// import React, { useEffect, useState } from 'react'
// // useEffect
// const App = () => {
//     const [count,setCount]=useState(0)

//     useEffect(()=>{
//         console.log('useEffect without dependency')     
//     });

 
//   return (
//    <>
//    <h1>{count}</h1>
//    <button onClick={()=>setCount(count+1)}>click</button>
//    </>
//   )
// }
// export default App

















