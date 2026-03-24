import React, { useContext } from 'react'
import { Auth } from './AuthContext'

const DashBoard = () => {
    let {state, login, logout} = useContext(Auth)

  return (
    <div className='flex justify-center items-center h-[80vh]'>

        <div>

            {
                state ? <p>Please Login</p> : <p> "Welcome Prasad" </p> 
             }
        </div>




        
    </div>
  )
}

export default DashBoard