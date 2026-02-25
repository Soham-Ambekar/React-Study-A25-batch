// 2️⃣ Show Alert Button
// Button
// When clicked → show alert("Button Clicked!")
// 👉 Bonus: Pass custom message as parameter.


import React, { Fragment } from 'react'

const EventTask1 = () => {

  let handleClick = ()=>{
    alert("button clicked!")
  }


  return (
    <Fragment>
      <button onClick={handleClick} style={{backgroundColor:"magenta",border:"none",borderRadius:"10px"}}>Click ME</button>
    </Fragment>  
  )
}

export default EventTask1