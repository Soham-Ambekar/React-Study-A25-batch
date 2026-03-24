import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc10, inc2, inc5, res } from '../../../Slice/StepCounterSlice'


const Task2 = () => {

    let data = useSelector(val=>val)

    let dispatch = useDispatch()


  return (
    <>

    <p>Count: {data}</p>
    <button onClick={()=>{dispatch(inc2(2))}}>Inc2</button> <br />
    <button onClick={()=>{dispatch(inc5(5))}}>Inc5</button> <br />
    <button onClick={()=>{dispatch(inc10(10))}}>Inc10</button> <br />
    <button onClick={()=>{dispatch(res())}}>Reset</button><br />
    </>
  )
}

export default Task2