// useReducer Tasks
// Task 6 – Counter with Multiple Actions
// Reducer actions:
// increment
// decrement
// reset
// incrementByValue
// Example Input
// Initial: 10
// Action: incrementByValue(5)
// Output: 15

import React, { useReducer } from 'react'

const Task6 = () => {

    let initial = 0;

    let reducer = (state,action)=>{
        switch (action.type) {
            case "Inc":
                return action.payload
                break;
            case "Dec":
                return action.payload
                break;
            case "Res":
                return action.payload
                break;
            case "IncPlus":
                return action.payload
                break;
        
            default:
                break;
        }
    }

    let [state, dispatch] = useReducer(reducer, initial)

let handleInc = ()=>{
    dispatch({type:"Inc", payload: state+1})
}

let handleDec= ()=>{
    dispatch({type:"Dec", payload: state-1})
}

let handleRes=()=>{
    dispatch({type:"Res", payload: initial})
}

let handleIncPlus = ()=>{
    dispatch({type:"IncPlus", payload: state+5})
}

  return (
    <>

    <p>Count: {state}</p>

    <button onClick={handleInc}>Inc</button> <br />
    <button onClick={handleDec}>Dec</button> <br />
    <button onClick={handleRes}>Res</button> <br />
    <button onClick={handleIncPlus}>Inc + 5</button>

    </>
  )
}

export default Task6