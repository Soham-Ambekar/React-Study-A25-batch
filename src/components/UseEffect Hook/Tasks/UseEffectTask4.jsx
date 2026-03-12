//! 4️⃣ Digital Clock
// Create a live clock.
// Task
// Show current time
// Update every second
// Concepts used:
// setInterval
// useEffect
// cleanup function

import React, { useEffect, useState } from 'react'

const UseEffectTask4 = () => {
    let [state,setstate] = useState(new Date().toLocaleTimeString())
    
    useEffect(()=>{

        let timer = setInterval(()=>{ 
            setstate( "Time :" + new Date().toLocaleTimeString())
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    }, [])
    


  return (
    <p>{state}</p>
  )
}

export default UseEffectTask4