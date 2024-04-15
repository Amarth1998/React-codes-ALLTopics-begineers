import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'
  
const Shop = () => {
    const dispatch=useDispatch()
  const actionn=bindActionCreators(actionCreators,dispatch)
    return (
    <div>
      <button onClick={()=>{actionn.depositMoney(100)}}>+</button>
      add this item in cart
      <button onClick={()=>{actionn.withdrawMoney(100)}}>-</button>
    </div>
  )
}

export default Shop
