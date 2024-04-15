import React, { useMemo, useState } from 'react'
// usememo 
const App = () => {
const [add,setAdd]=useState(0)
const [sub,setSub]=useState(100)

const multipication=useMemo( function multi(){
    console.log("******")
    return add*10
} ,[add]
)

  return (
    <>
    {multipication} <br />
     <span>{add}</span>
     <button onClick={()=>setAdd(add+1)}>add</button> <br />
     <span>{sub}</span>
     <button onClick={()=>setSub(sub-1)}>sub</button> 
    </>
  )
}
export default App

// import React, { useState } from 'react'
// // usememo 
// const App = () => {
// const [add,setAdd]=useState(0)
// const [sub,setSub]=useState(100)

// function multi(){
//     console.log("******")
//     return add*10
// }
//   return (
//     <>
//     {multi()} <br />
//      <span>{add}</span>
//      <button onClick={()=>setAdd(add+1)}>add</button> <br />
//      <span>{sub}</span>
//      <button onClick={()=>setSub(sub-1)}>sub</button> 
//     </>
//   )
// }

// export default App

//when you click on add button multi function will run .
//but when you click on sub still multi will function jabki multi function ka koi lena dena nahi hai sub se ye console pr dekhega , unnessuary function call hora hai , 

//to overcome this problm we use usememo hook




