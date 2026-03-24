// Task 2 – User Authentication Context
// Build a global authentication system.
// Context Data
// user: null
// When login happens:
// {
//  name: "Prasad",
//  role: "trainer",
//  location: "Pune"
// }
// Requirements
// •	Navbar shows Login / Logout
// •	Dashboard shows Welcome Prasad

import React from 'react'
import AuthContext from './AuthContext'
import Navbar from './Navbar'
import DashBoard from './DashBoard'

const Task2 = () => {
  return (
    <AuthContext>
        <Navbar></Navbar>
        <DashBoard></DashBoard>
    </AuthContext>
  )
}

export default Task2