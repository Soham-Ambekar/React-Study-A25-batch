import React, { useContext } from 'react'
import UserContext from './UserContext'

const Dec = () => {
    let{handleDecrement}= useContext(UserContext)
  return (
    <>
    <button onClick={handleDecrement}>DEC</button>
    </>
  )
}

export default Dec