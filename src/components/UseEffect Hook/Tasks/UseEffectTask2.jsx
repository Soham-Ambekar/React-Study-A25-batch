//! 2️⃣ Show Alert When Page Loads
// When the component loads, show an alert.
// Task
// When page loads → alert "Welcome to my React App"


import React, { useEffect } from 'react'

const UseEffectTask2 = () => {

    useEffect(()=>{
        alert("Welcome to my React App")
    },[])


  return (
    <div>UseEffectTask2</div>
  )
}

export default UseEffectTask2