import React from 'react'
import { Outlet ,Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <h1>this is about</h1>
      <div> <Link to="about1">about1</Link> 
       <Outlet/>
      </div>
    </div>
  )
}
