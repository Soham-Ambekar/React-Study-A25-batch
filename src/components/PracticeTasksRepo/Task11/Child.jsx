import React, { memo, useState } from 'react'

const Child = ({user}) => {
  console.log("hello moto");
  

  
  return (
    <>
    <p>{user.name}</p>
    <p>{user.age}</p>
    <p>{user.role}</p>

    
    </>
  )
}

export default Child