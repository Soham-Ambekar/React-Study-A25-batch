import React, { createContext, useState } from 'react'

export let LangContext = createContext()

const Context = ({children}) => {
    let [lang, setLang] = useState("English");



  return (
    <LangContext.Provider value={{lang,setLang}}>
        {children}
    </LangContext.Provider>


  )
}

export default Context