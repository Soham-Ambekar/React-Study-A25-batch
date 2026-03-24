// Context API Tasks
// Task 1 – Global Theme Manager
// Create a global theme system using Context API.
// Requirements
// •	Two themes: light and dark
// •	Provide theme from a ThemeProvider
// •	Any component should be able to toggle the theme.
// Input
// Initial Theme: light
// User clicks "Toggle Theme"
// Expected Theme: dark
// Components:
// App
// Navbar
// Dashboard
// Footer
// All components should receive the theme from Context.

import React from 'react'
import ContextProvider from './Context'

const Task1Intro = () => {
  return (
    <ContextProvider></ContextProvider>
  )
}

export default Task1Intro