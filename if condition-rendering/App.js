import React from 'react'
import Goal from './Goal';
function App() {
  return (
   <>
   <Goal isGoal={true} />    {/*output :Goal*/}

   <Goal isGoal={false} />   {/*output: MISSED!*/}
   </>
  )}
export default App;



