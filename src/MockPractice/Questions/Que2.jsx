// 3️⃣ Controlled Input
// Create:
// Input field
// Show typed text below it


import React, { useState } from 'react'

const Que2 = () => {
    let [state, setState] = useState("")

    let handleChange=(e)=>{
        setState(e.target.value)
    }


  return (
    <>
    <input onChange={handleChange} type="text" className='border-2' placeholder='type here...'/>

    <p>live script : {state}</p>
    
    </>
  )
}

export default Que2