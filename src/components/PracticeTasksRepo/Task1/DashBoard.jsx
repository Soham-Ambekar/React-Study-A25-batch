import React, { useContext } from 'react'
import { themeContext } from './Context'

const DashBoard = () => {
let {state,handleClick} =useContext(themeContext)

  return (
    <div className={state? "light":"dark"}>

        <div className='h-[80vh] flex justify-center items-center text-3xl'>
            <p>This is Dahboard</p>
        </div>

    </div>
  )
}

export default DashBoard