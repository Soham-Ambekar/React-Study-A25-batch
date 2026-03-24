// Task 4 – Language Translation Context
// Create a language switcher.
// Languages:
// English
// Hindi
// Marathi
// Example UI text
// English
// Welcome to the website
// Hindi
// वेबसाइट पर आपका स्वागत है
// Marathi
// वेबसाईटवर आपले स्वागत आहे


import React from 'react'
import Context from './Context'
import Nav from './Nav'
import Dashboard from './Dashboard'

const Task4 = () => {
  return (
    <Context>
        <Nav></Nav>
        <Dashboard></Dashboard>
    </Context>
  )
}

export default Task4