import React from 'react'

const MissedGoal=()=>{return <h1>MISSED!</h1>;
}
const MadeGoal=()=> {return <h1>GOAL!</h1>;}

const Goal=(props)=> 
{
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

export default Goal



