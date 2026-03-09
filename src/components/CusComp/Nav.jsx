import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>

    <Link to="/home">Home</Link>
    <Link to="/home/about">About</Link>
    <Link to="/home/contact">Contact</Link>

    
    </>
  )
}

export default Nav