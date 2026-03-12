// ! By using UseRef we can directly acces the real dom elements and for multiple tags we need numtile useref


import React, { useRef } from 'react'

const T1 = () => {

    let textRef = useRef()
  return (
    <>
    
    <h1 ref={textRef}>hello</h1>
    <button onClick={()=>{
        console.log(textRef);
        textRef.current.style.backgroundColor = "red"
        
    }} >Click</button>    
    
    </>
  )
}

export default T1