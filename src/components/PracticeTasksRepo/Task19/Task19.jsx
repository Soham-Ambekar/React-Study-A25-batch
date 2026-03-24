// Task 19 – Todo Add Function Optimization
// Todo input:
// "Prepare UPSC notes"
// Pass addTodo function to a memoized child component.
// Ensure the function reference is stable.

import React, { useState } from 'react'

const Task19 = () => {

    let [list,setList] = useState([])

    let [obj,setObj]= useState({note:"", priority:"", id:Date.now()})

    let addTodo = ()=>{}

    let handleSubmit = (e)=>{}

    let handleChange = ()=>{}

  return (
    <>

    <p>UPSC Notes</p>
    
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name='note' value={obj.name} placeholder='note' />
        <input type="text" onChange={handleChange} name='priority' value={obj.priority} placeholder='priority' />
        <button>Add</button>
    </form>

    
    
    </>
  )
}

export default Task19