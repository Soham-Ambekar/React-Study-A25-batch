// 2️⃣ Take input from user and show it live on UI

import React, { Fragment, useState } from 'react'

const StateTask5 = () => {

    let [state,setState] = useState("Live Preview here..")

    let handleChange = (e)=>{
        setState(e.target.value)
    }


  return (
    <Fragment>
        <form action="">
            <input type="text" placeholder='Type here' onChange={handleChange}/>
        </form>

        <p>{state}</p>

    </Fragment>
  )
}

export default StateTask5