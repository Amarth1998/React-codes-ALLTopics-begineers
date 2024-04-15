import React from 'react'
import Shop from './Shop'
import { useSelector } from 'react-redux'

const App = () => {
  const amount=useSelector(state=>state.amount)
  return (
    <>
   <Shop/>
<br />
   <button>balance {amount}</button>
    </>
  )
}

export default App
