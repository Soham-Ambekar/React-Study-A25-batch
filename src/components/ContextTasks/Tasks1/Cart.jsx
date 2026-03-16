import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Cart = () => {

    let{state,handleClick} = useContext(UserContext)

  return (
  <>
  Cart <br />
  <button onClick={handleClick}> {state? "Light":"Dark"} </button>

  </>
  )
}

export default Cart