// 9️⃣ Temperature Converter
// Input Celsius
// Convert to Fahrenheit live


import React, { useState } from 'react'

const StateTask12 = () => {
    let [celsius,setCelsius] = useState("");

    let Fahrenheit = celsius == ""? " " : (celsius*9)/5 + 32;


  return (
    <>

    <div>
        <input type="text" onChange={(e)=>{setCelsius(e.target.value)}}/>
        <p> Fahrenhrit:  {Fahrenheit}</p>
    </div>
    
    
    
    </>
  )
}

export default StateTask12