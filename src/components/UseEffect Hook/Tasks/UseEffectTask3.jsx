//! 3️⃣ Console Logger
// Log something whenever state changes.
// Task
// Input field
// Whenever user types → log value in console

import React, { useEffect, useState } from 'react'

const UseEffectTask3 = () => {
    let [state, setstate] = useState("")
   

    useEffect(()=>{
        console.log(state);
    },[state])
    


  return (
    <>

    <input type="text" onChange={(e)=>{setstate(e.target.value)}}  placeholder='hey type here.. '/>
    
    </>
  )
}

export default UseEffectTask3