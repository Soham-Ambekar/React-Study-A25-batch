import React, { createContext, useState } from 'react'
import Nav from './Nav'
import DashBoard from './DashBoard'
import Footer from './Footer'

export let themeContext = createContext()

const ContextProvider = ({children}) => {

    let [state,setState] = useState(false)

    let handleClick = ()=>{
        setState(!state)
    }


  return (
    <>
    <themeContext.Provider value={{state,handleClick}}>
        <Nav></Nav>
        <DashBoard></DashBoard>
        <Footer></Footer>
    </themeContext.Provider>
    
    
    </>
  )
}

export default ContextProvider