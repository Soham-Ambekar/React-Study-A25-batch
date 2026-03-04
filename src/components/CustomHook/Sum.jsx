import React from 'react'
import { UseAdd } from './UseAdd'

const Sum = () => {
    let sum = UseAdd(10,20)

  return (
    <div>sum : {sum}</div>
  )
}

export default Sum