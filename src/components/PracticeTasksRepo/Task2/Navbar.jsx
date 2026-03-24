import React, { useContext } from 'react'
import { Auth } from './AuthContext'

const Navbar = () => {
    let {state,login,logout} = useContext(Auth)  


  return (
   <div className={state? "light":"dark"}>
<div className='flex justify-around items-center h-[5vh] '>
    
    <div className='flex justify-center items-center gap-10 '>
    <p>NavBar</p>
        <p>about</p>
        <p>contact</p>
    </div>
<div>
  {  state? <button onClick={logout} className='p-3 bg-amber-800 rounded-2xl w-[5vw] ' > login </button> : <button onClick={login} className='p-3 bg-amber-800 rounded-2xl w-[5vw] ' > logout </button> }

</div>
</div>
    
    </div>
    
  )
}

export default Navbar