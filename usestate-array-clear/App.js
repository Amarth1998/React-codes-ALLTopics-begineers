import React, { useState } from 'react'
// usestate array 

function App() {
     const bioData=[
        {id:0,myName:"amarth" ,age:23} ,
        {id:1,myName:"patel" ,age:23} ,
        {id:2,myName:"sharma" ,age:23} 
    ]
    const [myArray,setArray]=useState(bioData);
    const clearArray=()=>{
        setArray([])
    }
return (
<>
{myArray.map( 
    (currentElement) => { return <h1 key={currentElement.id}>name {currentElement.myName} and age {currentElement.age} </h1>}     
            ) 
}
<button onClick={clearArray}>clear</button>
</>
)}
export default App;





















