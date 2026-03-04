import React from 'react'
import PropsTask1ChildsChildsChilds from './PropsTask1ChildsChildsChilds';

const PropsTask1ChildsChild = (props) => {
    console.log(props);
    
  return (
    <>
    <div>PropsTask1ChildsChild</div>
    <PropsTask1ChildsChildsChilds props ={props}></PropsTask1ChildsChildsChilds>
    </>

  )
}

export default PropsTask1ChildsChild