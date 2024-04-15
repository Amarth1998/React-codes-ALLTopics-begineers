
import { UserContext } from "./App";
import { useContext } from "react";
import Component2 from "./Component2";

function Component() {

const  user=useContext(UserContext)

  return (
  <>

<h1>component 1  ------------------------ {user} </h1>


<Component2/>
  </>
  );
}

export default Component;
