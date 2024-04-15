import React, { useReducer } from 'react'

const initialstate=0;
const reducer=(state,action)=>{
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return  state-1
     default :
     return state 
  }
}
const App = () => {
  const[count,dispatch]=useReducer(reducer,initialstate)

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>dispatch("increment")}>increment</button>  <br/>
     <button onClick={()=>dispatch("decrement")}>decrement</button>
    </>
  )
}

export default App

// when we click on increment button dispatch function will call .
// dispatch function reducer function main jaega.
// const reducer=(state,increment)=>{
//   switch(increment){
//     case "increment":
//       return state+1
//     case "decrement":
//       return  state-1
//      default :
//      return state 
//   }
// }
