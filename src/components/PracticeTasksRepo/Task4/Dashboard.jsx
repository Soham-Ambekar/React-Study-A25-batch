import React, { useContext } from 'react'
import { LangContext } from './Context'

const Dashboard = () => {
    let {lang,setLang} = useContext(LangContext)

    let translation = {
        english: "Welcome to the website",
    hindi: "वेबसाइट पर आपका स्वागत है",
    marathi: "वेबसाईटवर आपले स्वागत आहे",
    }


  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {/* Show text based on language */}
      <h3>{translation[lang]}</h3>
    </div>
  )
}

export default Dashboard