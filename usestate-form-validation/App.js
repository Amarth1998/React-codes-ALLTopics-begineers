import React, { useState } from 'react'
const App = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [allEntry,setnewEntry]=useState([]);

const submitForm=(e)=>{
    e.preventDefault(); //prevent for auto refresh when form submit
    
    if (email && password) {
    const newEntry = { id:new Date().getTime().toString(), email:email , password : password} 
    setnewEntry([...allEntry , newEntry]);
    // console.log(allEntry)
    
    setEmail("");
    setPassword("")}
    else{
        alert("pls fill the data")
    }
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
        const {id ,email ,password}=a;     //array destructure
        return ( <>
        <div key={id}>
            <p>{email}</p>
            <p>{password}</p>
            </div>
            </>
        )
    }
)}
    </>
  )
}
export default App
