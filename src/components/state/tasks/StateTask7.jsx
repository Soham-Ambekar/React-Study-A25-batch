// 3️⃣ Show / Hide Text
// Button: “Show”
// On click → show paragraph
// Button changes to “Hide”

import React, { Fragment, useState } from 'react'

const StateTask7 = () => {
let [state,setState] = useState(false);

let handleClick = ()=>{
    setState(!state)
}



  return (
   <Fragment>
    <button onClick={handleClick}>{state? "Hide" : "Show" }</button>
    {/* {state ? (  <p>This is the hidden text 🎉</p>   ) : null} */}

    {state && (  <p>Jaduuuu bhaiii ki jay</p>   ) }     
    {/* thiss is recomended to do */}

   </Fragment>
  )
}

export default StateTask7