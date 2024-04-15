import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import About1 from './About1'
export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
             <Route path="" element={<Layout/>}>
             <Route index element={<Home/>} />
             <Route path='Home' element={<Home/>} />
             <Route path='About' element={<About/>}>
             <Route path='about1' element={<About1/>} />
             </Route>
            </Route>
   </Routes>
    </BrowserRouter>
   </>
  )
}

