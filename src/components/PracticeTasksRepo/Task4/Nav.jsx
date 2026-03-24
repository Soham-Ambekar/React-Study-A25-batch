import React, { useContext } from 'react'
import { LangContext } from './Context'

const Nav = () => {

    let{lang,setLang} = useContext(LangContext)


  return (
    <div style={{ padding: "20px", background: "#ccc" }}>
      <h2>Navbar</h2>

      {/* Language Buttons */}
      <button onClick={() => setLang("english")}>English</button>
      <button onClick={() => setLang("hindi")}>Hindi</button>
      <button onClick={() => setLang("marathi")}>Marathi</button>
    </div>
  )
}

export default Nav