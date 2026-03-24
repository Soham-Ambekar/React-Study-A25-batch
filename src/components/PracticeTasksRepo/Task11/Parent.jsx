// Task 11 – Prevent Unnecessary Re-renders
// Parent component has:
// counter
// theme
// Child component displays:
// User Profile
// Ensure the child does not re-render when counter changes.
// User Data Input
// name: "Prasad"
// age: 28
// role: "React Trainer"

import React, { useMemo, useState } from 'react'
import Child from './Child';

const Parent = () => {
  let [state,setState] = useState(0);

  const user = useMemo(()=>{
    return    { name: "Prasad",
    age: 28,
    role: "React Trainer"}
  },[])


  return (
    <>

    <div>Count:{state }</div>
    <button onClick={()=>{setState(state+1)}} >+</button> <br />
    <button onClick={()=>{setState(state-1)}} >-</button>

<Child user={user} ></Child>   

    </>
  )
}

export default Parent