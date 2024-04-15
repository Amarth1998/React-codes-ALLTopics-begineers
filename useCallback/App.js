// solution
import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

const App = () => {
    const [add,setAdd]=useState(0)
    const [count,setcount]=useState(0)
    const Learning=useCallback(()=>{},[count])
    
  return (
    <>
    <h1>{add}</h1>
     <button onClick={()=>setAdd(add+1)}>add</button>  <br />
     <h1>{count}</h1>
     <button onClick={()=>setcount(count+2)}>count</button>
     <ChildA Learning={Learning}  count={count}/>
    </>
  )
}
export default App


//problem 
// when you click on add button , the childA component also render again and again .
// to solve this problem we use useCallback 



// // problem
// import React, { useCallback, useState } from 'react'
// import ChildA from './ChildA'

// const App = () => {
//     const [add,setAdd]=useState(0)
//     function Learning(){
//     }
//   return (
//     <>
//     <h1>{add}</h1>
//      <button onClick={()=>setAdd(add+1)}>add</button>  <br />
//      <ChildA Learning={Learning} />


//     </>
//   )
// }
// export default App
// //problem 
// // when you click on add button , the childA component also render again and again .
// // to solve this problem we use useCallback 
