import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../Store/CounterStore'
import Task1 from './Task1'

const Task1Intro = () => {
  return (
    <Provider store={store}>
      <Task1/>
    </Provider>
  )
}

export default Task1Intro