import React, { useState } from 'react'
// usestate toogle
function App() {
    const [name, setname] = useState("amarth")
    const change = () => {
        let val = name;
        if (val === "amarth") {
            setname('raj')
        }
        else { setname("amarth") }
    }
    return (
        <>
            <h1>{name}</h1>
            <button onClick={change}>Toggle</button>
        </>
    )
}
export default App;





















