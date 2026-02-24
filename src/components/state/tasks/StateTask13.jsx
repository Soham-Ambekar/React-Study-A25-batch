// Like Button ❤️
// Click → Increase likes
// Button color changes


import React, { useState } from 'react'

const StateTask13 = () => {
    let [state,setState] = useState(0)
    let [liked,setLiked] = useState(false)

    let handleClick= ()=>{
        if(liked){
            setState(state-1)
        }
        else{
            setState(state+1)
        }

        setLiked(!state)

    }



  return (
    <>
    

    <button style={{background: state? "red":"black"}} onClick={handleClick}>❤️</button>
   
    
    
    </>
  )
}

export default StateTask13