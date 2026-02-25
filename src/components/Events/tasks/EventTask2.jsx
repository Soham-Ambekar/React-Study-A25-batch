// 3️⃣ Toggle Text
// Button
// When clicked → show/hide a paragraph
// 👉 Hint: Use boolean state.

import React, { Fragment, useState } from 'react'

const EventTask2 = () => {

    let [state, setState] = useState(false);

    let handleClick= ()=>{
        setState(!state)
    }

  return (
   <Fragment>
    <button onClick={handleClick}> {state ? "Hide" : "show"} </button>

    <p style={{display: state ? "" : "none"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem, deleniti cupiditate reiciendis maxime porro. Magni velit asperiores consequatur assumenda.</p>
   </Fragment>
)
}

export default EventTask2