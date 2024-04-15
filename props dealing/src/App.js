import { useState, createContext } from "react";

import Component from "./Component";

export const UserContext = createContext();

const App = () => {
  const [user, setUser ] = useState("amarth patel")
  return (
    <>


      <UserContext.Provider value={user}>
        <h1>appp page </h1>
        <Component />
      </UserContext.Provider>



    </>
  );
}

export default App;

