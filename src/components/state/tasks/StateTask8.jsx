// 5️⃣ Live Name Preview
// Input field
// Show: Hello, Soham
// Updates as user types

import React, { Fragment, useState } from 'react'

function StateTask8() {
    let [state,setState] = useState("")

    let handleChange = (e)=>{
      setState("hello,  " + e.target.value)
    }

  return (
    <Fragment>
      <form action="">
        <input type="text" onChange={handleChange}/>
       
        <h1>{state}</h1>
      </form>
        
    </Fragment>
  )
}

export default StateTask8