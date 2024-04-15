import React from 'react'
import {Outlet,Link} from "react-router-dom"
export default function Layout() {
  return (
    <>
    <Link to="Home">Home</Link>
    <Link to="About">About</Link>
    <div className='container'>
        <Outlet/>
    </div>
    
    <div>
        <footer>  this is footer </footer>
    </div> 
    </> ) }
