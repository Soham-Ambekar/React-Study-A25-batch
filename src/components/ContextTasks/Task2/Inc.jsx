import React, { useContext } from 'react'
import UserContext from './UserContext'

const Inc = () => {
    let {handleIncrement} = useContext(UserContext)


  return (
    <button onClick={handleIncrement} >INC</button>
  )
}

export default Inc