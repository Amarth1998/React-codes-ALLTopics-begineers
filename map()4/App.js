import React from 'react'

const data=[
  {"rollnumber":101 ,
    "name":"amarth",
  "fees":101},
  {"rollnumber":101 ,
  "name":"amarth",
"fees":101},
{"rollnumber":101 ,
"name":"amarth",
"fees":101},
]

const mydata=data.map(function (a)
{
   return <li>{a.rollnumber} {a.name} {a.fees} </li>
})

function App() {
  return (
   <>
{mydata}
   </>
  )
}
export default App;



