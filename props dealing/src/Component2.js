
import { UserContext } from "./App";
import { useContext } from "react";


function Component2() {
  const  user=useContext(UserContext)
    return (
    <>
   
    <h1>component 2  ------------------------ {user} </h1>
     


    </>
    );
  }
  
  export default Component2;
  