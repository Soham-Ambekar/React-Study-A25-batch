import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, inc5, reset } from '../../../Slice/CounterSlice'

const Task1 = () => {

    let data = useSelector(val=>val)

    let dispatch = useDispatch()



  return (
    <>

    <p>Count: {data}</p>
    <button onClick={()=>{dispatch(inc())}}>INC</button>
    <button onClick={()=>{dispatch(dec())}}>DEC</button>
    <button onClick={()=>{dispatch(inc5(5))}}>INC 5</button>
    <button onClick={()=>{dispatch(reset())}}>Reset</button>

    
    
    </>
  )
}

export default Task1