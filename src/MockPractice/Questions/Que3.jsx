// Button Click Message
// Click button → show “Welcome Soham”
// Add:
// Toggle show/hide button

import React, { useState } from 'react'

const Que3 = () => {
    let [state, setState]=useState(false)

    let handleClick =()=>{
        setState(!state)
    }

  return (
    <>
    <button onClick={handleClick}> {state? "hide": "show"} </button>
    <p> {state? "hello":""}</p>
    </>
  )
}

export default Que3