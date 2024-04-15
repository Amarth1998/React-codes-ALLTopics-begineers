import React, { useEffect ,useState } from 'react'
// useEffect and cleanup function 
const App = () => {
    const [ widthCount,setwidthCount]=useState(window.screen.width);
    const actualWidth=()=>{
               setwidthCount(window.innerWidth)
    }
    useEffect(()=>{ 
        console.log("add event")
        window.addEventListener("resize",actualWidth)
        return ()=>{
            window.removeEventListener("resize",actualWidth)
        }
    })
 return (
    <>
    <p>the actual size of screen is :</p>
    <h1>{widthCount}</h1>
    </>
  )
}
export default App
