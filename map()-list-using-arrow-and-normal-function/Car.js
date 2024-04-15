import React from 'react'
export default function Car() {
	const a=["car" ,"car" ,"car"]
	const b =a.map( (item) => <p>{item}</p>  )
  return (
	<>
    {b}
	</>
  )
}


{/* 
// import React from 'react'
// export default function Car() {
// 	const a=["car" ,"car" ,"car"]
// 	const fun=(item)=>{return <p>{item}</p>}
// 	const b=a.map(fun)
//   return (
// 	<>
//     {b}
// 	</>
//   )
// }


 */}
