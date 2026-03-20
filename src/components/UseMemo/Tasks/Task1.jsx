import React, { useMemo, useState } from 'react'

const Task1 = () => {

    let [state1, setState1] = useState(0)
    let [state2, setState2] = useState(0)


    let checkState1=()=>{
        console.log("State1 Function");
        
        return state1%2 ==0? "Even":"Odd"
    }

    let val1 = useMemo(checkState1, [state1])

    let checkState2 =()=>{
        console.log((
        "State2 function"
        ));
        
        return state2%2==0?"Even":"Odd"
    }

    let val2 = useMemo(checkState2, [state2])



  return (
   <>

   <button onClick={()=>{setState1(state1+1)}} >state1: {state1} (val1))  </button> <br /><br />
   <button onClick={()=>{setState2(state2+1)}} >state2: {state2} (val2)  </button>

   
   
   </>
  )
}

export default Task1