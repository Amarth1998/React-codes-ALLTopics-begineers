
import { UserContext } from "./App";
import { useContext } from "react";


function Component3() {


  const  user=useContext(UserContext)
  return (
  <>
 
    
 <h1>component 3  ------------------------ {user} </h1>

  </>
  );
}

export default Component3;