import React, { useState } from 'react'

export default function Object() {

    const[myobject , setMyObject]=useState({
        myName:"amarth" , myAge:27 ,degree :"BE"
    })
 
    const changeObject=()=>{
       setMyObject({...myobject,myName:"lucky"  })
    } 
// {...myobject,myName:"lucky"  } =means ...myobject ki saari value aagai hai , myName:"lucky" change hoga bss
  return (
    <div>
      <h1>Name : {myobject.myName} and Age: {myobject.myAge}  and Degree :{myobject.degree}</h1>
      <button onClick={changeObject} >update</button>
    </div>
  )
}

//want to change only one object myName . we have to use spread operator
//initial:Name : amarth and Age: 27 and Degree :BE
//after update click :Name : lucky and Age: 27 and Degree :BE



















import React, { useState } from 'react'
export default function Object() {
    const[myobject , setMyObject]=useState({
        myName:"amarth" , myAge:27 ,degree :"BE"
    })
     const changeObject=()=>{
       setMyObject({myName:"lucky" , myAge:10 ,degree :"mca" })
    } 
 return (
    <div>
      <h1>Name : {myobject.myName} and Age: {myobject.myAge}  
      and Degree :{myobject.degree}</h1>

      <button onClick={changeObject} >update</button>
    </div>
  )
}
// when you want to update  in object
// WHEN you click on button . 
// output : Name : lucky and Age: 10 and Degree :mca










import React, { useState } from 'react'
export default function Object() {
    const[myobject , setMyObject]=useState({
        myName:"amarth" , myAge:27 ,degree :"BE"
    })
    const changeObject=()=>{
       setMyObject({myName:"lucky"})
    } 
  return (
    <div>
      <h1>Name : {myobject.myName} and Age: {myobject.myAge}  
      and Degree :{myobject.degree}</h1>
      <button onClick={changeObject} >update</button>
    </div>
  )
}
//  when you want to update myName in object
//WHEN you click on button . myName will  change to lucky but age and degree removed.  
//initial:Name : amarth and Age:27 and Degree :BE
//output : Name : lucky and Age: and Degree :