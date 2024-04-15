import React from 'react'
import College from './College'
import data from './Data';
const mydata=data.map(function (a)
{
return <College  
Name={a.name}  
Year = { a.year } 
Address = { a.address }/>;
})
function App() {
  return (
<>
{mydata}
</>
)}
export default App;



