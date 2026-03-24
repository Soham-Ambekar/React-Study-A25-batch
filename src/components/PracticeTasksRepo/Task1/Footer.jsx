import React, { useContext } from 'react'
import { themeContext } from './Context'

const Footer = () => {
    let {state,handleClick} =useContext(themeContext)

  return (
    <div className={state? "light":"dark"} >

        <div className='flex justify-center items-center h-[15vh]'>
            <p>footer</p>
            <p>Lorem, ipsum dolor.</p>
            <p>lrem10

            </p>
        </div>

    </div>
  )
}

export default Footer