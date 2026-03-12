// ! Uncontrolled form 


import React, { useEffect, useRef } from 'react'

const T2 = () => {

    let nameRef = useRef("")
    let passRef = useRef("")
    let mobileRef = useRef("")

    useEffect(()=>{
        nameRef.current.focus()
    },[])



  return (
      <>
    <input type="text" ref={nameRef} />
    <input type="text" ref={passRef} />
    <input type="text" ref={mobileRef} />

    <button onClick={()=>{
        console.log(nameRef.current.value);
        console.log(passRef.current.value);
        console.log(mobileRef.current.value);
        
        
    }} >Submit</button>
    
    
    
    </>
  )
}

export default T2