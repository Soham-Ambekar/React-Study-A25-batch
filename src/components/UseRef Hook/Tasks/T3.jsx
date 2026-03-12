import React, { useRef } from 'react'

const T3 = () => {

    let countRef = useRef(0)
  return (
    <>

    <h1>{countRef.current}</h1>
    <button onClick={()=>{
        countRef.current++
        console.log(countRef.current++);
    }}>+</button>

<br />
    <button onClick={()=>{
        countRef.current--
       
        console.log( countRef.current--);
        
    }}>-</button>
    
    
    </>
  )
}

export default T3