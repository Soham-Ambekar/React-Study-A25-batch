// 4️⃣ Character Counter
// Input field
// Show number of characters typed
// If > 20 → text turns red



import React, { Fragment, useState } from 'react'

const StateTask9 = () => {
    let [state,setState] = useState("");

    let handleChange = (e)=>{
        setState(e.target.value)
    }


  return (
    <Fragment>
        <input type="text" onChange={handleChange} laceholder="Type something..."
        style={{ padding: "10px", width: "250px" }} />
        <p style={{color: state.length > 20? "red":"black", fontWeight:"800"}}>Character count: {state.length}</p>
        <p style={{color: state.length >20? "red":"black"}}>Input live :{state}</p>
    </Fragment>
  )
}

export default StateTask9