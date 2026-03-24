import React, { createContext, useContext, useState } from 'react'

export let Auth = createContext() 

const AuthContext = ({children}) => {

    let [state,setState] = useState()

    let login = ()=>{
        setState({name: "Prasad", role: "trainer",location: "Pune"})
    }

    let logout = ()=>{
        setState(null)
    }


  return (
    <Auth.Provider value={{state,login,logout}}>
        {children}
    </Auth.Provider>
    
    
  )
}

export default AuthContext