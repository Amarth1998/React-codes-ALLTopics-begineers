import React from 'react'
export default function Car() {
	const carModel=[{id:1,brand:"bmw"},
	                {id:2,brand:"audi"},
	                 ]
return (
<>
{ carModel.map( (x) => <li key={x.id}> {x.brand}</li> ) }
</>
)
}
