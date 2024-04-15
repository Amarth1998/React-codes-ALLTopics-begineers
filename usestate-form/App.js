import React, { useState } from 'react'
const App = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [allEntry,setnewEntry]=useState([]);

const submitForm=(e)=>{
    e.preventDefault(); //prevent for auto refresh when form submit
    const newEntry = {email:email , password : password} 
    setnewEntry([...allEntry , newEntry]);
    // console.log(allEntry)      
}
  return (
    <>
       <form action="" onSubmit={submitForm}>
       email:    
       <input type="text" 
       value={email}  
       name='email'  
       onChange={(e)=> setEmail(e.target.value)} /> <br />

       password: 
       <input type="text" value={password}  name='password' 
       onChange={(e)=> setPassword(e.target.value)}/><br/>
       
       <button type='submit'>login</button>

       </form>

{allEntry.map(
    (a)=>{
        return ( <>
            <p>{a.email}</p>
            <p>{a.password}</p>
            </>
        )
    }
)}
    </>
  )
}
export default App
