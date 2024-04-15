import React from 'react'
export default function College(props) {
    const data={
    color:"red",
    width:"20%",
    border:"2px solid black",
    margin:"10px",
    padding:"10px"
    }
  return (
   <>
   <div style={data}> 
   <li>my name is {props.Name}  </li>
   <li>my year is {props.Year}  </li>
   <li>my address is {props.Address}  </li>

   </div>
   </>
  )
}
