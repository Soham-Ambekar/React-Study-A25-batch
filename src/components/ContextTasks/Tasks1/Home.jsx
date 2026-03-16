import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Home = () => {
    let {state,handleClick} = useContext(UserContext)

  return (
    <>
Home <br />
    <button onClick={handleClick} > {state? "Light": "Dark"} </button>
    
    </>
  )
}

export default Home