import React from 'react'
import { Provider } from 'react-redux'
import { StepStore } from '../../../Store/StepCounterStore'
import Task2 from './Task2'

const Task2Intro = () => {
  return (

    <Provider store={StepStore}>

        <Task2/>

    </Provider>
  
    
  )
}

export default Task2Intro