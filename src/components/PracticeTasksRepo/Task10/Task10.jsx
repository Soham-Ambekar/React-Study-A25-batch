// Task 10 – Bank Account System
// State:
// balance: 10000
// Actions:
// deposit
// withdraw
// transfer
// reset
// Example:
// deposit 5000
// balance = 15000


import React, { useReducer } from 'react'

const Task10 = () => {
let initial = 10000;
let reducer = (state,action)=>{
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}
    let [state,dispatch] = useReducer(reducer, initial);





  return (
    <>
    <p >Bank Account System</p>

    <div>
        <p>Balance: {state}</p>
        <br />

        <input type="text" placeholder='enter amt for deposit..'/>  <button></button> <br /> 
        
        <button onClick={()=>{initial}}>Reset</button> <br />

    </div>
    
    
    </>
  )
}

export default Task10