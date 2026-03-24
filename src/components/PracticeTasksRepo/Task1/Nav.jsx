import React, { useContext } from 'react'
import { themeContext } from './Context'

const Nav = () => {

    let {state,handleClick} = useContext(themeContext)

   


  return (
    <div className={state? "light":"dark"}>
<div className='flex justify-around items-center h-[5vh] '>
    
    <div className='flex justify-center items-center gap-10 '>
    <p>NavBar</p>
        <p>about</p>
        <p>contact</p>
    </div>
<div>
    <button onClick={handleClick} className='p-3 bg-amber-800 rounded-2xl w-[5vw] ' > {state ? "Light": "Dark"} </button>

</div>
</div>
    
    </div>
  )
}

export default Nav