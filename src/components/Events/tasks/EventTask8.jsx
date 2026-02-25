// 🔟 Pass Argument in Event Handler
// 3 buttons:
// "Apple"
// "Banana"
// "Mango"
// When clicked → show selected fruit name

import React, { Fragment, useState } from 'react'

const EventTask8 = () => {

    let [ state , setState] = useState("");

    let handleClick = (a)=>{
        setState(a)
    }


  return (
    <Fragment>

        <button style={{padding: "5px",margin:"10px"}} onClick={()=>handleClick("apple")}>1</button>
        <button style={{padding: "5px",margin:"10px"}} onClick={()=>handleClick("banana")}>2</button>
        <button style={{padding: "5px",margin:"10px"}} onClick={()=>handleClick("mango")}>3</button>

        <p>{state}</p>

    </Fragment>
  )
}

export default EventTask8