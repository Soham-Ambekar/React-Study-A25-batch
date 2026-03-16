import React, { useContext } from 'react'
import Inc from './Inc'
import Dec from './Dec'
import { UserContext } from './UserContext'

const Counter = () => {

    let {count} = useContext(UserContext)

  return (

    <>
    <div>{count}</div>
    <Inc></Inc>
    <Dec></Dec>
    </>
    

  )
}

export default Counter