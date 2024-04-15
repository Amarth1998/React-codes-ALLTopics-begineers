// import { useContext } from "react"; 
import { useState } from "react"; 
import Component from "./Component";


const App=()=> 




{
  const[user,setUser]=useState("amarth patel")
  return (
  <>
  <h1>welcome {user} </h1>


<Component  user={user} /> 

  </>
  );
}

export default App;
