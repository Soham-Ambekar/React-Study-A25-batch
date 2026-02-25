// 8️⃣ Key Press Detector
// Input field
// When user presses Enter → show alert
// Show which key was pressed
// 👉 Use onKeyDown

import React, { Fragment, useState } from 'react'

const EventTask6 = () => {
    let [state,setState] = useState("")

    let handleKeyDown = (e)=>{
        console.log(e);
        
        setState(e.key)

        e.key === "Enter" ? alert("Enter") : ""
     
        
    }

  return (
    <Fragment>
        <input type="text" onKeyDown={handleKeyDown} />
        <p>{state}</p>
    </Fragment>
  )
}

export default EventTask6





