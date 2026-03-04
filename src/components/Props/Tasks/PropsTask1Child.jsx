import React from 'react'
import PropsTask1ChildsChild from './PropsTask1ChildsChild';

const PropsTask1Child = (props) => {
    console.log(props);
    

  return (
   <>
   <div>PropsTask1Child</div>
<PropsTask1ChildsChild props ={props} ></PropsTask1ChildsChild>   
   </>
  )
}

export default PropsTask1Child