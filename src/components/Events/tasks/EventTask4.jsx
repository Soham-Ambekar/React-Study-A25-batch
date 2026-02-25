// 6️⃣ Character Counter
// Input field
// Show number of characters typed
// If > 15 characters → text turns red


import React, { Fragment, useState } from 'react'

const EventTask4 = () => {
    let [state,setState] = useState("")
    let handleChange = (e)=>{
        setState(e.target.value)
    }
    
  return (
    <Fragment>


        <input onChange={handleChange} type="text" placeholder='Enter here'/>
        <p style={{color: state.length>15? "red": ""}} >{state}</p>


    </Fragment>
    
  )
}

export default EventTask4