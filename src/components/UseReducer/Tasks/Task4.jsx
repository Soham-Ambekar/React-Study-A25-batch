import React, { useReducer } from 'react'

const Task4 = () => {

    let initial = 1;
    let reducer = (state,action)=>{
        switch (action) {
            case 'inc':
                return state+1
                break;
            case 'dec':
                return state-1
                break;
        
            default:
                break;
        }
    }

    let [state, dispatch] = useReducer(reducer,initial)

  return (

    <>
    <div> count: {state} </div>
    <button onClick={()=>{dispatch("inc")}} >inc</button>
    <button onClick={()=>{dispatch('dec')}}>dec</button>
    </>
   


  )
}

export default Task4