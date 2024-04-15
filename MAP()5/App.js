import React from 'react'
import College from './College'
const data=[
  {"name":"mits",
"year":1950,
"address":"gwalior"} ,
{"name":"mits",
"year":1950,
"address":"gwalior"} ,
{"name":"mits",
"year":1950,
"address":"gwalior"}
]

const mydata=data.map(function (a)
{
return <College  Name={a.name}  Year = { a.year } Address = { a.address }/>;
   
})

function App() {
  return (
   <>
{mydata}
   </>
  )
}
export default App;



