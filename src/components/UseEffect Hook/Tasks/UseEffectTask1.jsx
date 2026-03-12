//!1️⃣ Change Page Title
// Create a counter and update the browser tab title when the count changes.
// Task
// Button to increase count
// When count changes → update document.title

import React, { useEffect, useState } from 'react'

const UseEffectTask1 = () => {
    const [state, setstate] = useState(0)

    let title = document.querySelector("title")

    useEffect(()=>{
        title.innerText = "count:" + state
    },[state])
  



  return (
   <>
   <p onClick={()=>{setstate(state+1)}}  >Count: {state}</p>
   </>
  )
}

export default UseEffectTask1