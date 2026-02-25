// 9️⃣ Mouse Hover Effect
// Div box
// On mouse enter → change text to "Mouse Inside"
// On mouse leave → change text to "Mouse Outside"
// 👉 Use onMouseEnter and onMouseLeave


import React, { Fragment, useState } from 'react'

const EventTask7 = () => {
    let [state,setState] = useState("")

    let handleMouseEnter = ()=>{
        setState("In the Box")
    }

    let handleMouseLeave = ()=>{
        setState("Not in Box")
    }


  return (
    <Fragment>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{height: "30vh" , width: "30vw", border: "1px solid", margin: "20px", backgroundColor: "red"}}>
            {state}
        </div>
    </Fragment>
  )
}

export default EventTask7