import React from 'react'

function Model(props)
{
return <li>this is {props.a}</li>
}

export default function Car() {
	const carModel=[{id:1,brand:"bmw"},
	                {id:2,brand:"audi"},
	                 ]
  return (
	<>
	{ carModel.map( (x)=> <Model key={x.id} a={x.brand}/> ) }
	</>
  )
}
