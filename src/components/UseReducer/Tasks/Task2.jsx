import React, { useReducer } from 'react'

const Task2 = () => {

    let initial = "Neutral"

    let Reducer = (state, action)=>{

        switch (action) {
            case "dance":
                return state = "Dance"
                break;
            case "sing":
                return state = "Sing"
                break;
            case "ride":
                return state = "Ride"
                break;
        
            default:
                return state = "Ghar pe betha"
                break;
        }
    }

    let [state,dispatch] = useReducer(Reducer,initial)




  return (
    <>

    <p>whats on mind : {state}</p>

    <button onClick={()=>{dispatch("dance")}} >Dance</button> <br />
    <button onClick={()=>{dispatch("sing")}} >Sing</button> <br />
    <button onClick={()=>{dispatch("ride")}} >Ride</button> <br />

    
    
    
    </>
  )
}

export default Task2