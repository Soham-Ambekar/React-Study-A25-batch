import React from 'react'
import PropChild2 from './PropChild2';

const PropChild1 = ({a,num=0}) => {

    console.log(a);
    console.log(num);
    
  return (
    <>
    <div>PropChild1</div>
    <PropChild2 a={a}> </PropChild2>
    
    </>
  )
}

export default PropChild1 