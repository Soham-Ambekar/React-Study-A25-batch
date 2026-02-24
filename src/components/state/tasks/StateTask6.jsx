// 2️⃣ Toggle Button
// Create a button:
// Shows: ON
// When clicked → becomes OFF
// Background color changes


import React, { Fragment, useState } from 'react'

const StateTask6 = () => {

    let [state,setState] = useState(false);
    let handleClick = ()=>{
        setState(!state)
    }
  return (
    <Fragment>
        <div style={{height:"500px",width:"500px",backgroundColor:state?"red":"blue", borderRadius:"10px" }}>
            <button style={{padding:"10px", margin:"10px 200px", width:"50px", border:"none" ,borderRadius:"10px"}} onClick={handleClick} > {state ? "ON" : "OFF"}  </button>
        </div>
        
    </Fragment>
  )
}

export default StateTask6