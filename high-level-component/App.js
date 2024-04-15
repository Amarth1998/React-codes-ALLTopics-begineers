import React, { useState } from 'react'
const App = () => {
  return (
    <>
    <Home a={Counter}/>
    <Home1 a={Counter}/> 
    </>
  )
}
export default App

const Home = (props) => {
  return (
    <>
       <h1 style={{backgroundColor:"red"}}> <props.a/> </h1>
    </>)}

const Home1 = (props) => {
  return (
    <>
       <h1 style={{backgroundColor:"yellow"}}> <props.a/> </h1>
    </>)}

const Counter = () => {
  const[count,setcount]=useState(0)
  return (
    <>
    {count}
      <button onClick={()=>setcount(count+1)}>click</button>
    </>)}
