import React from 'react'

function Model(props)
{
return <li>this is {props.a}</li>
}

export default function Car() {
	const carModel=["bmw","ford","tata"]
  return (
	<>
	{ carModel.map( (key)=> <Model a={key}/> ) }
	</>
  )
}
