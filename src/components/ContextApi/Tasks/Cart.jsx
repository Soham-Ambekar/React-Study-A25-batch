import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Cart = () => {
    let name = useContext(UserContext)
    // console.log(name);
    

  return (
    <div>Cart</div>
  )
}

export default Cart