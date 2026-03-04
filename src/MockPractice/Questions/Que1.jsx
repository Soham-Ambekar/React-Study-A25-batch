// 2️⃣ Create a Counter
// Task:
// Button: Increment
// Button: Decrement
// Show count
// Count should not go below 0


import React, { useState } from 'react'

const Que1 = () => {

    let [state,setState] = useState(0)

    let handleClick=()=>{setState(state+1)}
    let handleClickDec=()=>{
        state>0 ? setState(state-1) : 0;
    }

  return (
    <>
<p>Count: {state}</p>
    <button onClick={handleClick}>Inc</button>
    <button onClick={handleClickDec}>Dec</button>
    
    </>
  )
}

export default Que1