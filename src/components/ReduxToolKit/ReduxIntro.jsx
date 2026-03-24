import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../Store/CounterStore'
import Task1 from './Task1/Task1'
import Task1Intro from './Task1/Task1Intro'
import Task2Intro from './Task2/Task2Intro'

const ReduxIntro = () => {

  return (
  // <Task1Intro></Task1Intro>
  <Task2Intro></Task2Intro>
  )
}

export default ReduxIntro