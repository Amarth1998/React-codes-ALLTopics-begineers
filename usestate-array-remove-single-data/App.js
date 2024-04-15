import React, { useState } from 'react'
// usestate array  remove single data
function App() {
    const bioData = [
        { id: 0, myName: "amarth", age: 23 },
        { id: 1, myName: "patel", age: 23 },
        { id: 2, myName: "sharma", age: 23 }
    ]
    const [myArray, setArray] = useState(bioData);
    const clearArray = () => {
        setArray([])
    }
    const removesingle = (id) => {
        // alert(id) 
        const myNewarray = myArray.filter((curntData) => { return curntData.id !== id })

        setArray(myNewarray)
    }
 // curntData.id !== id  --> agar data match nahi krega vo myNewarray main store kr dega . 
    return (
        <>
            {myArray.map((z) => {
                return (<h1 key={z.id}>name {z.myName} and age {z.age}
                    <button onClick={() => removesingle(z.id)}>remove</button>
                </h1>
                )
            }
            )
            }
            <button onClick={clearArray}>clear all</button>
        </>
    )
}
export default App;





















